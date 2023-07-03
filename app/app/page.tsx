import { Section } from '@/components/layouts/Section'
import { Button } from "@/components/ui/button"
import { Stack } from '@/components/layouts/Stack'
import { Tablet } from '@/components/devices/Tablet'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { SubscriptionForm } from '@/components/subscriptionForm'
import Link from 'next/link'
import { AppShell } from '@/components/layouts/AppShell'

export default function Home() {
  return (
    <AppShell>
      <Stack className='w-full p-4 max-w-[70rem] self-center'>
        <Section>
          <Stack className="w-full items-center justify-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-[30vh] lg:mt-[30vh] sm:mt-[15vh] text-center">AI Web Page Analyzer.</h1>

            <p className="text-xl font-semibold tracking-tight text-center max-w-[30rem] mt-4">Revolutionize Web Page Analysis: Unleash Mind-blowing AI-Powered Wizardry and Uncover Limitless Possibilities!</p>

            <Stack className='mt-8 mb-8'>
              <Link href="core" shallow>
                <Button size="lg" >Unlock AI Potential</Button>
              </Link>
              <p className="text-center mt-2"><small>100% Free and Open Source.</small></p>
            </Stack>


            <Tablet />
          </Stack>
        </Section>

        <Section className='min-h-full lg:min-h-[100vh] sm:pt-16'>
          <Stack className="w-full items-center justify-center mt-24 sm:mt-0">

            <h2 className="mt-8 pb-2 text-3xl font-bold tracking-tight max-w-[30rem] transition-colors first:mt-0 text-center">In reality all comes down to your prompting skills</h2>

            <p className="text-xl font-semibold tracking-tight text-center max-w-[30rem]">But some of features include.</p>


            <div className='grid w-full grid-cols-1 sm:grid-cols-3 mt-16 gap-4'>
              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className='text-2xl font-extrabold'>SEO Optimization.</CardTitle>
                  <Separator />
                  <CardDescription className='text-xl'>
                    By analyzing the HTML and content data, can provide recommendations for optimizing webpages for search engines, improving meta tags, headings, or keyword usage.
                  </CardDescription>
                </Stack>
              </Card>

              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className='text-2xl font-extrabold'>Keyword Extraction</CardTitle>
                  <Separator />
                  <CardDescription className='text-xl'>
                    Analyze the content of a webpage and identify important keywords or phrases that are relevant to the topic or theme of the page.
                  </CardDescription>
                </Stack>
              </Card>

              <Card className="w-full p-4">
                <Stack spacing="sm">
                  <CardTitle className='text-2xl font-extrabold'>Content Generation.</CardTitle>
                  <Separator />
                  <CardDescription className='text-xl'>
                    Resume content and generate tweets, descriptions, reviews and more based on the given HTML and content data.
                  </CardDescription>
                </Stack>
              </Card>

            </div>
          </Stack>
        </Section>

        <Section className='min-h-full mt-[30vh] sm:mt-[20vh] mb-[25vh]'>
          <Stack className="w-full items-center justify-center">
            <h2 className="text-4xl font-extrabold">AI.WPA</h2>

            <h2 className="mt-8 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">Improve your work.</h2>

            <p className="text-xl font-semibold tracking-tight text-center max-w-[30rem]">The change is here. What are you gonna do about it?</p>

            <div>
              <Link href="core" shallow>
                <Button className='mt-8'>Unleash the Magic! &mdash; It&rsquo;s Free</Button>
              </Link>
              <p className="text-center mt-2"><small>100% Free and Open Source.</small></p>
            </div>
          </Stack>
        </Section>

        <Section className='min-h-full mt-[10vh] sm:mt-[20vh] mb-[25vh]'>
          <Stack className="w-full items-center justify-center">
            <h2 className="text-4xl font-extrabold max-w-[30rem] text-center">Stay in the Loop</h2>

            <p className="text-xl font-semibold tracking-tight text-center max-w-[30rem] mt-8">
              {`Don't miss out on my future free projects! Enter your email address below to receive updates straight to your inbox. No spam, just timely notifications about my free open-source releases!`}
            </p>

            <div className='flex w-full mt-8 max-w-[25rem]'>
              <SubscriptionForm />
            </div>
          </Stack>
        </Section>
      </Stack>
    </AppShell>
  )
}
