import Image from 'next/image'
import AvatarSrc from '@/images/avatar.webp'
import { FaArrowDown, FaEnvelope } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen bg-hero bg-cover bg-center bg-no-repeat">
        <ScrollButton />
        <div className="h-full w-full bg-white/20 backdrop-blur-sm dark:bg-black/50">
          <div className="container mx-auto flex h-full items-center">
            <div className="flex items-center gap-16 px-16" data-aos="fade-right" data-aos-delay="800">
              <Image src={AvatarSrc} alt="Avatar" width={220} />
              <div>
                <h1 className="text-6xl font-bold text-white">Hey, I'm Leon.</h1>
                <p className="mt-2 w-[70%] text-xl text-neutral-100 dark:text-neutral-300">
                  Welcome to my homepage. This page was entirely built by me and should give you a first impression of
                  my skills. The technology behind the site is Next.js with TailwindCSS and shadcn-ui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-2 py-8" id="about">
        <h1 className="text-4xl font-bold">About me</h1>
        {/* <p className="text-neutral-300 mt-1">You want to know something more about me? Here you go.</p> */}

        <p className="w-[50%] text-justify">
          As you probably already know, my name is Leon. I am 21 years old and live in Hessen (Germany). I'm studying
          Media Informatics in the 4th semester at the Technische Hochschule Mittelhessen. I've been teaching myself
          programming privately for about 4-5 years and I'd say it's going pretty well so far. <br /> <br /> My journey
          started in 2018 with FiveM. FiveM is a multiplayer platform for GTA 5 where you can create your own servers
          for the game. However, this requires programming skills. The main programming language there is Lua. In the
          beginning, I only programmed simple things, such as teleporting from point A to point B. Later, I programmed
          more and more things. Later, I got more and more involved with the subject and came across JavaScript and
          TypeScript through UI development. This is where I started to make simple interactions possible with the help
          of JQuery. After a short time, I got involved with frontend frameworks and learned to love React. <br />{' '}
          <br /> When it came to a real backend for the first time, I first looked at Express. Relatively quickly,
          however, my eye fell on Next.js, which I personally liked much better than Express. Then one thing led to
          another and so I also learned how to use shadcn and TailwindCSS. <br /> <br />
          Through my studies I was also introduced to Java and PHP for the first time, but I don't particularly like
          either language. I simply like the JS / TS environment best. <br /> <br /> And today I'm here, creating my own
          website. I've always been interested in computers, but I never thought I'd be writing my own websites.
        </p>

        <Button className="mt-2">
          <a href="mailto:leonossowski08@gmail.com" className="flex items-center gap-4">
            <FaEnvelope />
            Sende mir eine Mail
          </a>
        </Button>
      </div>

      <div className="container mx-auto flex justify-center">
        <div className="w-full border-t"></div>
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
