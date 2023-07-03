"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "@mantine/form";
import { ChangeEvent } from "react";
import { Stack } from "./layouts/Stack";
import { useToast } from "./ui/use-toast";

type Props = {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
}
function InputWithButton(props: Props) {
  return (
    <div className="flex w-full flex-col sm:flex-row items-center gap-2 grow">
      <Input type="email" placeholder="joetribbiani@friends.com" required {...props} />
      <Button type="submit"  >Subscribe</Button>
    </div>
  )
}

export const SubscriptionForm = () => {
  const { toast } = useToast()

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const credentialsSaved = () => {
    toast({
      description: "You have subscribed."
    })
  }

  return (
    <form onSubmit={form.onSubmit((values) => credentialsSaved())} className="flex w-full">
      <InputWithButton onChange={(e) => form.setFieldValue("email", e.target.value)} />
    </form>
  )
} 
