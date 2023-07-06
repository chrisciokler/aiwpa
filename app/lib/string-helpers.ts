export function extractHeadingsFromMDX(mdxContent: string) {
  const headingRegex = /^#+\s+(.*)$/gm;
  const headings = [];
  let matches;

  while ((matches = headingRegex.exec(mdxContent)) !== null) {
    const heading = matches[1];
    headings.push(heading);
  }

  return headings;
}
