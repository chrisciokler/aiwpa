"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SUBSCRIBE } from "@/lib";
import { useForm } from "@mantine/form";
import { ChangeEvent, useState } from "react";
import { Stack } from "./layouts/Stack";
import { useToast } from "./ui/use-toast";

export const SubscriptionForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const subscribeHandler = async (email: string) => {
    setLoading(true)
    const res = await SUBSCRIBE({ email });
    setLoading(false)

    form.reset()
    toast({
      description: "You have successfully subscribed. Thanks."
    })
  }

  return (
    <form onSubmit={form.onSubmit(({ email }) => subscribeHandler(email))} className="flex w-full">
      <div className="flex w-full flex-col sm:flex-row items-center gap-2 grow">
        <Input type="email" disabled={loading} placeholder="joetribbiani@friends.com" required value={form.values.email} onChange={(e) => form.setFieldValue("email", e.target.value)} />
        <Button type="submit" disabled={loading} loading={loading}>Subscribe</Button>
      </div>
    </form>
  )
} 
