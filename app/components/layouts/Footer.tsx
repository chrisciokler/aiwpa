import Link from 'next/link';
import { Group } from './Group';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t bg-background px-4 py-2 sm:py-6">
      <Group className="w-full sm:hidden" position="center" spacing="sm">
        <Link href="/privacy">
          <p className="font-semibold">
            <small>Privacy Policy</small>
          </p>
        </Link>

        <Link href="/terms">
          <p className="font-semibold">
            <small>Terms of Use</small>
          </p>
        </Link>
      </Group>

      <Group className="w-full max-w-[70rem]" position="apart">
        <p className="font-semibold">
          <small>&copy; 2023 AI WPA</small>
        </p>

        <Group position="center" spacing="sm">
          <Link href="https://www.chrisciokler.com" target="_blank">
            <p className="font-semibold">
              <small>Developed by @ChrisCiokler</small>
            </p>
          </Link>
        </Group>

        <Group position="right" spacing="sm" className="hidden sm:flex">
          <Link href="/privacy">
            <p className="font-semibold">
              <small>Privacy Policy</small>
            </p>
          </Link>

          <Link href="/terms">
            <p className="font-semibold">
              <small>Terms of Use</small>
            </p>
          </Link>
        </Group>
      </Group>
    </footer>
  );
};
