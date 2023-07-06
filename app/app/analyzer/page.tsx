'use client';
import { Group } from '@/components/layouts/Group';
import { Stack } from '@/components/layouts/Stack';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextareaAutosize } from '@/components/ui/textarea';
import { FormEvent, useRef } from 'react';
import { templates } from '@/constants';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { useAnalyzer } from '@/hooks/useAnalyzer';
import { CredentialModal } from '@/components/credentialModal';
import { ChatMessage } from '../../components/chat-message';
import { Loader } from '@/components/ui/loader';
import { useClipboard, useOs } from '@mantine/hooks';
import { useNavigation } from '@/hooks/useNavigation';

export default function Analyzer() {
  const os = useOs();
  const navigate = useNavigation();
  const ref = useRef<HTMLInputElement>(null);
  const analyzer = useAnalyzer();
  const { copied, copy } = useClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (copied) return;
    copy(analyzer.completion);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    analyzer.submitPrompt();
    if (os === 'android' || os === 'ios') navigate('#response');
  };

  return (
    <Stack className="mt-[60px] w-full sm:mt-[80px]">
      <div className="flex max-h-[60px] min-h-[60px] w-full items-center justify-center border-b p-4">
        <Group className="h-full w-full max-w-7xl" position="apart">
          <CredentialModal />
          <Group position="right" spacing="sm" className="hidden sm:flex">
            {analyzer.isTyping && (
              <Button variant="secondary" onClick={analyzer.handleStopConversation}>
                Stop
              </Button>
            )}
            <Button variant="secondary" onClick={analyzer.clean}>
              Clear
            </Button>
            <Button variant="secondary" onClick={onCopy}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </Group>
        </Group>
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2">
        <Stack className="max-h-full flex-1 items-center p-4 pb-8 pt-4 sm:max-h-[calc(100vh-140px)] sm:overflow-y-auto sm:border-r sm:pb-[10rem]">
          <Stack spacing="md" className="w-full max-w-xl flex-1">
            <form onSubmit={submit} className="flex w-full">
              <Stack className="w-full" spacing="md">
                <div className="flex w-full flex-col gap-[0.5rem] sm:flex-row">
                  <Input
                    type="text"
                    ref={ref}
                    required
                    id="url"
                    placeholder="aiwebpageanalyzer.com"
                    className="flex-1"
                    value={analyzer.url}
                    onChange={analyzer.handleUrl}
                  />

                  <Button type="submit" disabled={analyzer.isLoading || analyzer.isTyping} loading={analyzer.isLoading} className="self-end">
                    Start
                  </Button>
                </div>

                <TextareaAutosize
                  required
                  className="min-h-[100px] overflow-hidden"
                  placeholder="Type your message here."
                  value={analyzer.system}
                  onChange={analyzer.handleInput}
                />
              </Stack>
            </form>

            <h2 className="mt-4 text-2xl font-bold tracking-tight transition-colors first:mt-0">
              {`Don't know where to start? Try one of this templates.`}
            </h2>

            {templates.map((i) => (
              <Card
                className="w-full cursor-pointer p-4"
                key={i.title}
                onClick={() => {
                  analyzer.setSystemPrompt(i.description);
                  ref?.current?.focus();
                }}
              >
                <CardTitle className="text-xl font-bold">{i.title}</CardTitle>
                <CardDescription className="text-md font-semibold">{i.description}</CardDescription>
              </Card>
            ))}
          </Stack>
        </Stack>

        <Stack id="response" className="h-full max-h-full flex-1 items-center overflow-y-auto sm:max-h-[calc(100vh-140px)]">
          <div className="flex max-h-[60px] min-h-[60px] w-full items-center justify-center border-b border-t p-4 sm:hidden">
            <Group position="right" spacing="sm" className="h-full w-full max-w-7xl">
              {analyzer.isTyping && (
                <Button variant="secondary" onClick={analyzer.handleStopConversation}>
                  Stop
                </Button>
              )}
              <Button variant="secondary" onClick={analyzer.clean}>
                Clear
              </Button>
              <Button variant="secondary">Copy</Button>
            </Group>
          </div>
          <Stack spacing="md" className="min-h-[calc(100vh-120px)] w-full max-w-xl flex-1 p-4">
            {analyzer.completion.length === 0 && !analyzer.isLoading && (
              <Stack className="max-h-[calc(100vh-120px)] flex-1 items-center justify-center overflow-hidden">
                <Group position="center">
                  <h1 className="text-5xl font-extrabold text-gray-400 dark:text-gray-600">AI WPA</h1>
                </Group>
                <Group position="center">
                  <p className="text-gray-400 dark:text-gray-600">
                    <small>Powered by OpenAI</small>
                  </p>
                </Group>
              </Stack>
            )}
            {!analyzer.isLoading && analyzer.completion.length > 0 && <ChatMessage message={analyzer.completion} />}
            {analyzer.isLoading && (
              <Group position="center" className="flex-1">
                <Loader />
              </Group>
            )}
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}
