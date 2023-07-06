import { Group } from '../layouts/Group';
import { Stack } from '../layouts/Stack';
import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { templates } from '@/constants';

export const Tablet = () => {
  return (
    <div className="mt-12 flex aspect-square w-full overflow-hidden rounded-[1rem] bg-foreground p-2 dark:bg-muted sm:aspect-video sm:rounded-[2rem] sm:p-4 lg:rounded-[3rem] lg:p-8">
      <div className="flex h-full w-full rounded-[0.5rem] bg-background sm:rounded-[1rem] lg:rounded-[1.5rem]">
        <div className="grid w-full grid-cols-1 overflow-hidden py-8 sm:grid-cols-2">
          <Stack className="px-4 sm:border-r" spacing="sm">
            <Group className="w-full" position="right" spacing="sm">
              <div className="flex flex-1 items-center border bg-transparent p-[0.35rem] px-4">
                <small className="text-[0.5rem] sm:text-[0.75rem]">aiwebpageanalyzer.com</small>
              </div>
              <Button size="xs" className="px-2 py-[1px] sm:py-1">
                <small className="text-[0.5rem] sm:text-[0.75rem]">Start Analysis</small>
              </Button>
            </Group>

            <div className="border bg-transparent p-2 px-4 leading-3 sm:leading-normal">
              <small className="text-[0.5rem] leading-3 sm:text-[0.75rem] sm:leading-normal">
                You specialize in search engine optimization (SEO). Make a deep analysis of the give site data. Check content, keywords, structure,
                metatags and provide effective strategies and techniques that the user can utilize to obtain high-quality backlinks to raise the SEO
                of their website. Ensure to include actionable steps and tips for building a strong backlink profile.
              </small>
            </div>

            <Separator className="mb-4 mt-2" />

            {templates.map((i) => (
              <Card className="w-full p-4" key={i.title}>
                <CardTitle className="text-sm font-bold">
                  <small>{i.title}</small>
                </CardTitle>
                <CardDescription className="text-xs font-semibold">
                  <small>{i.description}</small>
                </CardDescription>
              </Card>
            ))}
          </Stack>
          <Stack className="px-4" spacing="xs">
            <Skeleton className="h-[8px] w-[90%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[80%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[70%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[40%] sm:h-[16px]" />

            <Stack spacing="xs" className="hidden sm:flex">
              <Skeleton className="mt-2 h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
              <Skeleton className="h-[8px] w-[100%] sm:h-[16px]" />
            </Stack>

            <Skeleton className="mt-4 h-[8px] w-[100%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[60%] sm:h-[16px]" />

            <Skeleton className="mt-4 h-[8px] w-[90%] sm:h-[16px]" />
            <Skeleton className="h-[8px] w-[30%] sm:h-[16px]" />
          </Stack>
        </div>
      </div>
    </div>
  );
};
