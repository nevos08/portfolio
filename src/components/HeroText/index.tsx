'use client'

import { FiraMono } from '@/fonts/firamono'
import { cn } from '@/lib/utils'
import { TypeAnimation } from 'react-type-animation'

export default function HeroText() {
  return (
    <div>
      <TypeAnimation
        sequence={['', 500, 'Hey.', 500, "Hey. I'm Leon."]}
        speed={1}
        wrapper="h1"
        className={cn('text-center text-3xl font-bold text-white lg:text-left lg:text-6xl', FiraMono.className)}
      />
      <p
        className={cn(
          'mt-2 w-full text-justify text-xl text-neutral-100 dark:text-neutral-300 lg:w-[80%] lg:text-left',
          FiraMono.className,
        )}
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        Welcome to my homepage. Here you'll find some information about me and the projects I've been working on so far.
        This page was entirely built by me and should give you a first impression of my skills. The technology used for
        this site is Next.js with TailwindCSS and shadcn-ui.
      </p>
    </div>
  )
}
