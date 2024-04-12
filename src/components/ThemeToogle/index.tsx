'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <Button size="icon" variant="ghost">
            {theme === 'dark' ? <Sun onClick={() => setTheme('light')} /> : <Moon onClick={() => setTheme('dark')} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Toggle Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
