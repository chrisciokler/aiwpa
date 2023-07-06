import { Stack } from '@/components/layouts/Stack';
import Content from './privacy.mdx';

export default function Privacy() {
  return (
    <div className="mt-[60px] flex w-screen items-center justify-center sm:mt-[100px]">
      <Stack
        className="max-w-screen prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 w-full overflow-x-hidden break-words p-4 pb-[100px] sm:max-w-[40rem]"
        spacing="xl"
      >
        <Content />
      </Stack>
    </div>
  );
}
