const cleanText = (s) =>
  s
    .trim()
    .replace(/\s\s+/g, ' ')
    .replace(/<svg.*?>.*?<\/svg>/gs, '')
    .replace(/<style.*?>.*?<\/style>/gs, '')
    .replace(/<script.*?>.*?<\/script>/gs, '')
    .replace(/style=".*?"/g, '')
    .replace(/class=".*?"/g, '')
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
    return 'Sorry. Some error happened during the HTML extraction.';
  }
};
