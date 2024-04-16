'use client'

import { Progress } from '../ui/progress'

export default function Skills() {
  return (
    <>
      <h3 className="mt-4 text-2xl font-bold">Programming Languages</h3>
      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">JavaScript</p>
        <Progress value={90} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">TypeScript</p>
        <Progress value={80} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Java</p>
        <Progress value={20} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Lua</p>
        <Progress value={90} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Dart</p>
        <Progress value={10} />
      </div>

      <h3 className="mt-8 text-2xl font-bold">JS / TS Frameworks</h3>
      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">React</p>
        <Progress value={75} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Next.js</p>
        <Progress value={60} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Vue.js</p>
        <Progress value={10} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Express</p>
        <Progress value={30} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Flutter</p>
        <Progress value={5} />
      </div>

      <h3 className="mt-8 text-2xl font-bold">UI Libraries</h3>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Shadcn-UI</p>
        <Progress value={90} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Chakra UI</p>
        <Progress value={100} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Mantine</p>
        <Progress value={60} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Material UI</p>
        <Progress value={40} />
      </div>

      <h3 className="mt-8 text-2xl font-bold">Databases</h3>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">SQL</p>
        <Progress value={70} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">MongoDB</p>
        <Progress value={35} />
      </div>

      <h3 className="mt-8 text-2xl font-bold">Tools</h3>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Git & GitHub</p>
        <Progress value={60} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">Figma</p>
        <Progress value={70} />
      </div>

      <h3 className="mt-8 text-2xl font-bold">Platforms</h3>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">FiveM</p>
        <Progress value={100} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <p className="basis-1/3 font-[600] md:basis-1/5">alt:V</p>
        <Progress value={75} />
      </div>
    </>
  )
}
