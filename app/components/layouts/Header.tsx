import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ModeToggle } from '../themeButton';
import { Group } from './Group';

export const Header = () => {
  return (
    <header className="header-h fixed left-0 top-0 z-50 flex w-full items-center justify-center border-b bg-background px-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link href="/" shallow>
          <h2 className="text-2xl font-extrabold">AI WPA</h2>
        </Link>

        <Group position="right" spacing="md">
          <ModeToggle />
          <Link href="analyzer" shallow>
            <Button size="sm">Start Analysing</Button>
          </Link>
        </Group>
      </div>
    </header>
  );
};
