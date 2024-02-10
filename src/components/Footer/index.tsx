import Link from 'next/link'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <div className="border-t">
      <div className="container mx-auto flex justify-between py-4">
        <div>
          <Button variant="link" asChild className="text-lg text-neutral-900 dark:text-foreground">
            <Link href="/impressum">Impressum</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
