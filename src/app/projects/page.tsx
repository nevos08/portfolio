import Image, { StaticImageData } from 'next/image'

import Unfallexperten365 from '@/images/unfallexperten365.png'
// import NorvexRoleplay from '@/images/norvexroleplay.png'
// import LosSantosChronicles from '@/images/lossantoschronicles.png'
import NorvexStudios from '@/images/norvexstudios.png'
import { cn } from '@/lib/utils'

const PROJECTS: Array<{ logo?: StaticImageData; alt?: string; label?: string; href?: string; classNames?: string }> = [
  { logo: NorvexStudios, alt: 'NORVEX STUDIOS', href: '/', classNames: 'w-[60%]' },
  { logo: Unfallexperten365, alt: 'Unfallexperten365', href: 'https://unfallexperten365.de' },
  { label: 'Passwortmanager', href: 'https://github.com/nevos08/passwortmanager' },
]

export default function Projects() {
  return (
    <div className="h-screen bg-hero2 bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full bg-background/30 backdrop-blur-[3px] dark:bg-background/50">
        <div className="container mx-auto pt-32" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-white">Projects</h1>
          <p className="mt-2 text-lg text-white dark:text-neutral-300">A list of projects I worked on so far.</p>

          <div className="mt-2 grid auto-rows-[180px] grid-cols-4 gap-4">
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                logo={project.logo}
                alt={project.alt}
                label={project.label}
                classNames={project.classNames}
                href={project.href}
              />
            ))}

            <div className="flex items-center justify-center rounded-lg border bg-background/50 p-4 font-[600]">
              There is more to come...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ProjectProps = {
  logo?: StaticImageData
  alt?: string
  label?: string
  href?: string
  classNames?: string
}

function Project({ logo, alt, label, href, classNames }: ProjectProps) {
  return (
    <a href={href} target="_blank">
      <div className="flex h-full cursor-pointer items-center justify-center rounded-lg border bg-background/50 px-8 py-8 transition-all hover:bg-background">
        {logo && <Image src={logo} alt={alt || ''} className={cn('drop-shadow-lg', classNames)} />}

        {label && <p className="text-xl font-bold">{label}</p>}
      </div>
    </a>
  )
}
