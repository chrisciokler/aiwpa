import { Group } from "../layouts/Group"
import { Stack } from "../layouts/Stack"
import { Button } from "../ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Card, CardDescription, CardTitle } from "../ui/card"
import { templates } from "@/constants"

export const Tablet = () => {
  return (
    <div className='flex w-full aspect-square sm:aspect-video p-2 overflow-hidden lg:p-8 sm:p-4 bg-foreground dark:bg-muted rounded-[1rem] lg:rounded-[3rem] sm:rounded-[2rem] mt-12'>
      <div className='flex w-full h-full bg-background rounded-[0.5rem] lg:rounded-[1.5rem] sm:rounded-[1rem]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full py-8 overflow-hidden">
          <Stack className="px-4 sm:border-r" spacing="sm">
            <Group className="w-full" position="right" spacing="sm">
              <div className="flex flex-1 items-center p-[0.35rem] px-4 bg-transparent border">
                <small className="text-[0.5rem] sm:text-[0.75rem]">aiwebpageanalyzer.com</small>
              </div>
              <Button size="xs" className="py-[1px] px-2 sm:py-1"><small className="text-[0.5rem] sm:text-[0.75rem]">Start Analysis</small></Button>
            </Group>

            <div className="p-2 px-4 bg-transparent border leading-3 sm:leading-normal">
              <small className="text-[0.5rem] sm:text-[0.75rem] leading-3 sm:leading-normal">You specialize in search engine optimization (SEO). Make a deep analysis of the give site data. Check content, keywords, structure, metatags and provide effective strategies and techniques that the user can utilize to obtain high-quality backlinks to raise the SEO of their website. Ensure to include actionable steps and tips for building a strong backlink profile.</small>
            </div>

            <Separator className="mt-2 mb-4" />

            {
              templates.map(i => (
                <Card className="w-full p-4" key={i.title}>
                  <CardTitle className='text-sm font-bold'><small>{i.title}</small></CardTitle>
                  <CardDescription className='text-xs font-semibold'>
                    <small>{i.description}</small>
                  </CardDescription>
                </Card>))
            }
          </Stack>
          <Stack className="px-4" spacing="xs">
            <Skeleton className="w-[90%] h-[8px] sm:h-[16px]" />
            <Skeleton className="w-[80%] h-[8px] sm:h-[16px]" />
            <Skeleton className="w-[70%] h-[8px] sm:h-[16px]" />
            <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
            <Skeleton className="w-[40%] h-[8px] sm:h-[16px]" />

            <Stack spacing="xs" className="hidden sm:flex">
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px] mt-2" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
              <Skeleton className="w-[100%] h-[8px] sm:h-[16px]" />
            </Stack>

            <Skeleton className="w-[100%] h-[8px] sm:h-[16px] mt-4" />
            <Skeleton className="w-[60%] h-[8px] sm:h-[16px]" />

            <Skeleton className="w-[90%] h-[8px] sm:h-[16px] mt-4" />
            <Skeleton className="w-[30%] h-[8px] sm:h-[16px]" />
          </Stack>
        </div>
      </div>
    </div>
  )
}