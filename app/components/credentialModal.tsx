'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from './ui/passwordinput';
import { ChangeEvent, useEffect, useState } from 'react';
import { Stack } from './layouts/Stack';
import { ItemProps, SelectInput } from './ui/select';
import { useToast } from './ui/use-toast';
import Link from 'next/link';
import { MODEL } from '@/constants';

export const selectModelData: ItemProps[] = [
  { label: 'GPT-3.5', value: MODEL.gpt3 },
  { label: 'GPT-4', value: MODEL.gpt4 }
];

export function CredentialModal() {
  const [org, setOrg] = useState('');
  const [key, setKey] = useState('');
  const [model, setModel] = useState(MODEL.gpt3);
  const { toast } = useToast();

  useEffect(() => {
    setOrg(localStorage.getItem('org') || '');
    setKey(localStorage.getItem('key') || '');
    setModel(localStorage.getItem('model') || MODEL.gpt3);
  }, []);

  const apiKeyinputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setKey(text);
    localStorage.setItem('key', text);
  };

  const orginputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setOrg(text);
    localStorage.setItem('org', text);
  };

  const modelHandler = (value: string) => {
    setModel(value);
    localStorage.setItem('model', value);
  };

  const credentialsSaved = () => {
    toast({
      description: 'Credentials sucessfully saved'
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Credentials</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>OpenAI - Credentials</DialogTitle>
          <DialogDescription>{`Make changes to your profile here. Click save when you're done.`}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Stack className="w-full" spacing="xs">
            <Label htmlFor="name" className="text-left">
              Organization
            </Label>
            <Input id="name" type="text" placeholder="OpenAI Account Organization" value={org} onChange={orginputHandler} />
          </Stack>
          <Stack className="w-full" spacing="xs">
            <Label htmlFor="key" className="text-left">
              Api key
            </Label>
            <PasswordInput id="key" placeholder="OpenAI API Key" value={key} onChange={apiKeyinputHandler} />
          </Stack>

          <Stack className="w-full" spacing="xs">
            <Label htmlFor="key" className="text-left">
              OpenAI Model
            </Label>
            <SelectInput data={selectModelData} value={model} onChange={modelHandler} />

            <Link href="https://platform.openai.com/account/org-settings" target="_blank">
              <p className="text-indigo-600">
                <small>Don't have credentials? Get it now</small>
              </p>
            </Link>
          </Stack>
        </div>
        <DialogFooter className="flex flex-col">
          <DialogClose asChild>
            <Button type="submit" onClick={credentialsSaved}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
