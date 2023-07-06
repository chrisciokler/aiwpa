import type { MDXComponents } from 'mdx/types';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="scroll-m-20 text-left text-3xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>,
    h2: ({ children }) => <h2 className="scroll-m-20 text-left text-xl font-bold tracking-tight lg:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="scroll-m-20 text-left text-lg font-semibold tracking-tight lg:text-2xl">{children}</h3>,
    p: ({ children }) => <p className="text-base tracking-tight sm:text-lg">{children}</p>,
    ul: ({ children }) => (
      <ul className="flex flex-col gap-2" style={{ listStyle: 'inside' }}>
        {children}
      </ul>
    ),
    li: ({ children }) => <li className="text-base tracking-tight sm:text-lg">{children}</li>,
    ...components
  };
}
