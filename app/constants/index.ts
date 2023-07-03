export const CDN_URL = 'https://images.weserv.nl/?url=';
export const AI_EDGE_FUNCTION_URL = process.env.NEXT_PUBLIC_AI_API_ENDPOINT || '';

export const templates = [
  { title: 'Site resume', description: 'What is the site submitted about. Explain all the features that it has and pricing plans if any.' },
  { title: 'Post to YouTube script', description: 'Make a presentational script for a YouTube video about the site submitted.' },
  { title: 'Twitter Thread Generation', description: 'Generate an engaging Twitter thread using the submitted site data.' },
  {
    title: 'Simple Seo Analysis',
    description:
      'By analyzing the HTML and content data submitted, provide recommendations for optimizing for search engines, improving meta tags, headings, and keyword usage.'
  },
  {
    title: 'Keyword analysis',
    description:
      'Analyze the content of the page submitted and identify important keywords or phrases that are relevant to the topic or topic of the page.'
  }
];
