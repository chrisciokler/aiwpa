import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/markdown'

export interface ChatMessageProps {
  message: string
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12 pb-40')}
      {...props}
    >

      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            h1({ children }) {
              return <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl pb-4">{children}</h1>
            },
            h2({ children }) {
              return <h2 className="text-2xl font-bold tracking-tight lg:text-3xl py-4">{children}</h2>
            },
            h3({ children }) {
              return <h3 className="text-xl font-bold tracking-tight lg:text-2xl py-4">{children}</h3>
            },
            h4({ children }) {
              return <h4 className="text-lg font-semibold tracking-tight lg:text-xl py-4">{children}</h4>
            },
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            },
            ol({ children }) {
              return <ol className="mb-2" style={{ paddingInlineStart: 20 }}>{children}</ol>;
            },
            pre({ children }) {
              return <pre className="whitespace-normal">{children}</pre>;
            },
            table({ children }) {
              return <table className="border-collapse border border-black py-1 px-3 dark:border-white">{children}</table>;
            },
            th({ children }) {
              return <th className="break-words border border-black bg-gray-500 py-1 px-3 text-white dark:border-white">{children}</th>;
            },
            td({ children }) {
              return <td className="break-words border border-black py-1 px-3 dark:border-white">{children}</td>;
            }
          }}
        >
          {message}
        </MemoizedReactMarkdown>
      </div>
    </div>
  )
}