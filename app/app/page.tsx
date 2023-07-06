import { Section } from '@/components/layouts/Section';
import { Button } from '@/components/ui/button';
import { Stack } from '@/components/layouts/Stack';
import { Tablet } from '@/components/devices/Tablet';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SubscriptionForm } from '@/components/subscriptionForm';
import Link from 'next/link';
import { AppShell } from '@/components/layouts/AppShell';

export default function Home() {
  return (
    <AppShell>
      <Stack className="w-full max-w-[70rem] self-center p-4">
        <Section>
          <Stack className="w-full items-center justify-center">
            <h1 className="mt-[30vh] scroll-m-20 text-center text-4xl font-extrabold tracking-tight sm:mt-[15vh] lg:mt-[30vh] lg:text-5xl">
              AI Web Page Analyzer.
            </h1>

            <p className="mt-4 max-w-[30rem] text-center text-xl font-semibold tracking-tight">
              Revolutionize Web Page Analysis: Unleash Mind-blowing AI-Powered Wizardry and Uncover Limitless Possibilities!
            </p>

            <Stack className="mb-8 mt-8">
              <Link href="analyzer" shallow>
                <Button size="lg">Unlock AI Potential</Button>
              </Link>
              <Link href="https://github.com/chrisciokler/aiwpa" target="_blank">
                <p className="mt-2 text-center">
                  <small>100% Free and Open Source.</small>
                </p>
              </Link>
            </Stack>

            <Tablet />
          </Stack>
        </Section>

        <Section className="min-h-full sm:pt-16 lg:min-h-[100vh]">
          <Stack className="mt-24 w-full items-center justify-center sm:mt-0">
            <h2 className="mt-8 max-w-[30rem] pb-2 text-center text-3xl font-bold tracking-tight transition-colors first:mt-0">
              In reality all comes down to your prompting skills
            </h2>

            <p className="max-w-[30rem] text-center text-xl font-semibold tracking-tight">But some of features include.</p>

            <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className="text-2xl font-extrabold">SEO Optimization.</CardTitle>
                  <Separator />
                  <CardDescription className="text-xl">
                    By analyzing the HTML and content data, can provide recommendations for optimizing webpages for search engines, improving meta
                    tags, headings, or keyword usage.
                  </CardDescription>
                </Stack>
              </Card>

              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className="text-2xl font-extrabold">Keyword Extraction</CardTitle>
                  <Separator />
                  <CardDescription className="text-xl">
                    Analyze the content of a webpage and identify important keywords or phrases that are relevant to the topic or theme of the page.
                  </CardDescription>
                </Stack>
              </Card>

              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className="text-2xl font-extrabold">Content Generation.</CardTitle>
                  <Separator />
                  <CardDescription className="text-xl">
                    Resume content and generate tweets, descriptions, reviews and more based on the given HTML and content data.
                  </CardDescription>
                </Stack>
              </Card>
            </div>
          </Stack>
        </Section>

        <Section className="mb-[25vh] mt-[30vh] min-h-full sm:mt-[20vh]">
          <Stack className="w-full items-center justify-center">
            <h2 className="text-4xl font-extrabold">AI WPA</h2>

            <h2 className="mt-8 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">Improve your work.</h2>

            <p className="max-w-[30rem] text-center text-xl font-semibold tracking-tight">The change is here. What are you gonna do about it?</p>

            <div>
              <Link href="analyzer" shallow>
                <Button className="mt-8">Unleash the Magic! &mdash; It&rsquo;s Free</Button>
              </Link>
              <Link href="https://github.com/chrisciokler/aiwpa" target="_blank">
                <p className="mt-2 text-center">
                  <small>100% Free and Open Source.</small>
                </p>
              </Link>
            </div>
          </Stack>
        </Section>

        <Section className="mb-[25vh] mt-[10vh] min-h-full sm:mt-[20vh]">
          <Stack className="w-full items-center justify-center">
            <h2 className="max-w-[30rem] text-center text-4xl font-extrabold">Stay in the Loop</h2>

            <p className="mt-8 max-w-[30rem] text-center text-xl font-semibold tracking-tight">
              {`Don't miss out on my future free projects! Enter your email address below to receive updates straight to your inbox. No spam, just timely notifications about my free open-source releases!`}
            </p>

            <div className="mt-8 flex w-full max-w-[25rem]">
              <SubscriptionForm />
            </div>
          </Stack>
        </Section>
      </Stack>
    </AppShell>
  );
}
