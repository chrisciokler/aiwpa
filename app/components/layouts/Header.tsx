import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "../themeButton"
import { Group } from "./Group"

export const Header = () => {
  return (
    <header className="flex fixed top-0 z-50 left-0 w-full bg-background border-b items-center justify-center px-4 header-h">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link href="/" shallow>
          <h2 className="text-2xl font-extrabold">AI WPA</h2>
        </Link>

        <Group position="right" spacing="md">
          <ModeToggle />
          <Link href="core" shallow>
            <Button size="sm">Start Analysing</Button>
          </Link>
        </Group>
      </div>
    </header>
  )
}