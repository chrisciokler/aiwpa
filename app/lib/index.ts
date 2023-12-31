import { AI_EDGE_FUNCTION_URL, MODEL } from "@/constants";
import endent from "endent";

export const SUBSCRIBE = async (req: { email: string }) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify(req);

  try {
    const res = await fetch(`${AI_EDGE_FUNCTION_URL}/api/v1/subscribe`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const data = await res.json();
    return { ok: true, body: data, error: null };
  } catch (error) {
    return { ok: false, body: null, error };
  }
};

export const SITEANALYZER = async (
  req: { url: string; system: string },
  controller: AbortController
) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const system = endent`
  You will receive the html, css and text content of a site. 
  Just do the task, do not mention anything about the type or structure of the data submitted.

  Task:
  ${req.system}

  `;

  const org = localStorage.getItem("org");
  const key = localStorage.getItem("key");
  const model = localStorage.getItem("model") || MODEL.gpt3;

  const bodyContent = JSON.stringify({
    ...req,
    system,
    model,
    org,
    key,
  });

  try {
    if (!org) throw new Error("Organization missing");
    if (!key) throw new Error("Api Key missing");

    return await fetch(`${AI_EDGE_FUNCTION_URL}/api/v1/siteanalyzer`, {
      method: "POST",
      signal: controller.signal,
      body: bodyContent,
      headers: headersList,
    });
  } catch (error) {
    return { ok: false, body: null, error };
  }
};

export function createChunkDecoder() {
  const decoder = new TextDecoder();
  return function (chunk: Uint8Array | undefined): string {
    if (!chunk) return "";
    return decoder.decode(chunk, { stream: true });
  };
}
