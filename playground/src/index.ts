import fs from 'fs';

const cleanText = (s:string) =>
  s
    .trim()
    .replace(/\s\s+/g, ' ')
    .replace(/<svg.*?>.*?<\/svg>/gs, '')
    .replace(/<style.*?>.*?<\/style>/gs, '')
    .replace(/<script.*?>.*?<\/script>/gs, '')
    .replace(/rel=".*?"/g, '')
    .replace(/style=".*?"/g, '')
    .replace(/id=".*?"/g, '')
    .replace(/target=".*?"/g, '')
    .replace(/tabindex=".*?"/g, '')
    .replace(/role=".*?"/g, '')
    .replace(/class=".*?"/g, '')
    .replace(/class='.*?'/g, '')
    .replace(/data-.*?=".*?"/g, '')
    .replace(/aria-.*?=".*?"/g, '')
    .replace(/src=".*?"/g, '')
    .replace(/srcSet=".*?"/g, '')
    .replace(/fetchpriority=".*?"/g, '')
    .replace(/<!-- [^"]* -->/g, '')
    .replace(/<!--[^"]*-->/g, '');

export const extractHtml = async (uri: string) => {
  let url = uri;
  if (url && !url.match(/^[a-zA-Z]+:\/\//)) url = 'http://' + url;
  try {
    const res = await fetch(url);
    const data = await res.text();
    const cleaned = cleanText(data);
    return cleaned;
  } catch (error) {
    console.log('🚀 | file: index.ts:22 | extractHtml | error:', error)
    return 'Sorry. Some error happened during the HTML extraction.';
  }
};

const run = async () => {
  const data = await extractHtml("https://www.cubachama.com/")
  await fs.writeFileSync("./data2.html", data);
};

run();
