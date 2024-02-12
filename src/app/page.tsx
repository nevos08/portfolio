import Image from 'next/image'
import AvatarSrc from '@/images/avatar.webp'
import { FaArrowDown, FaEnvelope } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import HeroText from '@/components/HeroText'
import { Progress } from '@radix-ui/react-progress'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <div className="relative h-fit w-screen bg-hero bg-cover bg-center bg-no-repeat lg:h-screen">
        <ScrollButton />
        <div className="h-full w-full bg-white/20 pb-32 pt-16 backdrop-blur-sm dark:bg-black/50 lg:py-0 lg:pt-0">
          <div className="container mx-auto flex h-full w-full items-center">
            <div
              className="flex !w-full flex-col items-center gap-8 px-0 lg:flex-row lg:gap-16 lg:px-16"
              data-aos="fade-right"
            >
              <Image src={AvatarSrc} alt="Avatar" width={220} />
              <HeroText />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-2 py-8" id="about">
        <h1 className="text-4xl font-bold">About me</h1>

        <p className="w-full text-justify lg:w-[60%]">
          As you probably already know, my name is Leon. I am 21 years old and live in Hessen (Germany). I&apos;m
          studying Medieninformatik in the 4th semester at the Technische Hochschule Mittelhessen. I&apos;ve been
          teaching myself programming for about 4-5 years and I&apos;d say it&apos;s going pretty well so far. <br />{' '}
          <br /> My journey started in 2018 with FiveM. FiveM is a multiplayer platform for GTA 5 where you can create
          your own servers for the game. However, this requires programming skills. The main programming language there
          is Lua. In the beginning, I only programmed simple things, such as teleporting from point A to point B. Later,
          I programmed more and more things. Later, I got more and more involved with the subject and came across
          JavaScript and TypeScript through UI development. This is where I started to make simple interactions possible
          with the help of JQuery. After a short time, I got involved with frontend frameworks and learned to love
          React. <br />
          <br /> When it came to a real backend for the first time, I first looked at Express. Relatively quickly,
          however, my eye fell on Next.js, which I personally liked much better than Express. Then one thing led to
          another and so I also learned how to use shadcn and TailwindCSS. <br /> <br />
          Through my studies I was also introduced to Java and PHP for the first time, but I don&apos;t particularly
          like either language. I simply like the JS / TS environment best. <br /> <br /> And today I&apos;m here,
          creating my own website. I&apos;ve always been interested in computers, but I never thought I&apos;d be
          writing my own websites.
        </p>

        <Button className="mt-2 w-full lg:w-fit">
          <a href="mailto:leonossowski08@gmail.com" className="flex items-center gap-4">
            <FaEnvelope />
            Schreibe mir eine Nachricht
          </a>
        </Button>
      </div>

      <div className="container mx-auto">
        <div className="mb-8 mt-4 border-t"></div>
      </div>

      <div className="container mx-auto pb-8" data-aos="fade-up">
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="mt-1 text-neutral-300">A simple overview showing my skills.</p>

        <Skills />
      </div>
    </>
  )
}

function ScrollButton() {
  return (
    <div className="absolute bottom-0 z-[99] flex w-full items-center justify-center">
      <a href="#about">
        <div className="my-8 scale-105 animate-bounce cursor-pointer rounded-full border bg-white/40 p-4 dark:bg-black/50">
          <FaArrowDown className="text-3xl" />
        </div>
      </a>
    </div>
  )
}
