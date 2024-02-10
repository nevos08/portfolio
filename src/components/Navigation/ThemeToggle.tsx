'use client'

import { Switch } from '../ui/switch'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex items-center gap-4">
      <FaMoon className="text-2xl" />
      <Switch checked={theme == 'dark'} onCheckedChange={(checked: boolean) => setTheme(checked ? 'dark' : 'light')} />
      <FaSun className="text-2xl" />
    </div>
  )
}
