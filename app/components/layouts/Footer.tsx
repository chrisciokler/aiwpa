import { Group } from "./Group"

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-background border-t py-2 items-center justify-center px-4 sm:py-6">
      <Group className='w-full max-w-[70rem]' position="apart">
        <p className="font-semibold !color-dimmed"><small>&copy; 2023 AI WPA</small></p>

        <Group position="right" spacing="sm">
          <p className="font-semibold !color-dimmed"><small>Developed by @ChrisCiokler</small></p>
        </Group>
      </Group>

    </footer>
  )
}