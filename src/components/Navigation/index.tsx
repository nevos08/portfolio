import Link from 'next/link'
import Animator from './Animator'
import { Button } from '../ui/button'
import { FaBars, FaDiscord, FaGithub } from 'react-icons/fa6'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import ThemeToggle from '../ThemeToogle'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projekte', href: '/projects' },
]

export default function Navigation() {
  return (
    <div className="fixed z-[999] w-screen">
      <div className="container mx-auto">
        <Animator>
          <header className="flex w-full items-center justify-end py-8 lg:justify-center">
            <nav className="hidden gap-4 rounded-lg border bg-background/50 px-8 py-2 backdrop-blur-sm md:flex">
              <Button
                asChild
                variant="link"
                className="text-lg text-foreground dark:text-neutral-300 dark:hover:text-white"
              >
                <Link href="/">Home</Link>
              </Button>

              <Button
                asChild
                variant="link"
                className="text-lg text-foreground dark:text-neutral-300 dark:hover:text-white"
              >
                <Link href="/#skills">Skills</Link>
              </Button>

              <Button
                asChild
                variant="link"
                className="text-lg text-foreground dark:text-neutral-300 dark:hover:text-white"
              >
                <Link href="/projects">Projekte</Link>
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" asChild>
                      <a href="https://github.com/nevos08" target="_blank">
                        <FaGithub className="text-3xl" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">GitHub</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" asChild>
                      <a href="https://github.com/nevos08" target="_blank">
                        <FaDiscord className="text-3xl" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Discord</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <ThemeToggle />
            </nav>

            <Drawer>
              <DrawerTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost">
                  <FaBars className="text-3xl" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="z-[99]">
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                </DrawerHeader>
                {navigationLinks.map((x) => (
                  <Button key={x.href} asChild variant="link" className="text-foreground">
                    <Link href={x.href}>{x.label}</Link>
                  </Button>
                ))}

                <div className="flex items-center justify-center gap-4 pb-4">
                  <Button asChild size="icon" variant="ghost">
                    <a href="https://github.com/nevos08">
                      <FaGithub className="text-3xl" />
                    </a>
                  </Button>

                  <Button asChild size="icon" variant="ghost">
                    <a href="#">
                      <FaDiscord className="text-3xl" />
                    </a>
                  </Button>
                  <ThemeToggle />
                </div>
              </DrawerContent>
            </Drawer>
          </header>
        </Animator>
      </div>
    </div>
  )
}
