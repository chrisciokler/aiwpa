/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@/components/layouts/Stack";
import { useToast } from "@/components/ui/use-toast";
import { SITEANALYZER } from "@/lib";
import endent from "endent";
import { useState, useRef, useCallback, ChangeEvent } from "react";

export const STREAM_SEPARATOR = '___START_RESPONSE_STREAM___';
type Props = {
  onError?: (err: any) => void
}
export function useAnalyzer(props?: Props) {
  const [url, setUrl] = useState("");
  const [system, setSystemPrompt] = useState("");
  const stopConversationRef = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [completion, setCompletation] = useState('');
  const { toast } = useToast()

  const toggleLoading = (tog?: boolean) => {
    const value = tog === undefined ? !isLoading : tog
    setIsLoading(value)
  };

  const toggleTyping = (tog?: boolean) => {
    const value = tog === undefined ? !isTyping : tog
    setIsTyping(value)
  };

  const submitPrompt = useCallback(async () => {
    setCompletation('')
    let content = '';

    toggleLoading(true);

    try {
      const controller = new AbortController();
      const response = await SITEANALYZER({ url, system }, controller);

      if (!response.ok) {
        toggleLoading(false);
        const res = response as unknown as any
        const error = res.error as Error
        if (error.message && typeof error.message === "string") {
          toast({
            variant: "destructive",
            title: "Sorry",
            description: error.message
          })
        } else {
          toast({
            variant: "destructive",
            title: "Sorry",
            description: "Something happened. Try again"
          })
        }
        return;
      }

      const data = response.body;

      if (!data) {
        toggleLoading(false);
        toast({
          variant: "destructive",
          title: "Sorry",
          description: "Something happened. Try again"
        })
        return;
      }

      toggleLoading(false);

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let startText = '';
      let didHandleHeader = false;

      toggleTyping(true);

      while (!done) {
        if (stopConversationRef.current === true) {
          controller.abort();
          done = true;
          break;
        }

        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        if (content === "" && chunkValue === '') {
          toast({
            variant: "destructive",
            title: "Sorry",
            description:
              <Stack spacing="xs">
                <p>Something happened.</p>
                <p>Could be one of this reasons.</p>

                <Stack>
                  <p>1. Verify that your credentials are correct.</p>
                  <p>2. Your submitted site could have bot protection.</p>
                  <p>3. The content is to long for the AI to read it.</p>
                </Stack>

                <p>Max token count is up to 16k on GPT-3.5 and 32k on GPT-4</p>
              </Stack>
          })
        }

        if (!didHandleHeader) {
          startText = startText + chunkValue;
          if (startText.includes(STREAM_SEPARATOR)) {
            const parts = startText.split(STREAM_SEPARATOR);

            content = content + parts[1];
            setCompletation(content)
            didHandleHeader = true;
          }
        } else {
          content = content + chunkValue;
          setCompletation(content)
        }
      }
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Sorry",
        description: "Something happened. Try again"
      })
    }

    toggleLoading(false);
    toggleTyping(false);
  }, [url, system]);



  const handleStopConversation = () => {
    stopConversationRef.current = true;
    setTimeout(() => {
      stopConversationRef.current = false;
    }, 1000);
  };

  const clean = () => {
    setSystemPrompt("")
    setCompletation("")
    setUrl("")
  }

  const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSystemPrompt(e.currentTarget.value)
  }

  return {
    url,
    system,
    completion,
    clean,
    handleUrl,
    handleInput,
    setSystemPrompt,
    isLoading,
    isTyping,
    submitPrompt,
    handleStopConversation
  }
}