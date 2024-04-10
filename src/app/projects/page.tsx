import Image from 'next/image'

import Unfallexperten365 from '@/images/unfallexperten365.png'
import NorvexRoleplay from '@/images/norvexroleplay.png'
import LosSantosChronicles from '@/images/lossantoschronicles.png'
import NorvexStudios from '@/images/norvexstudios.png'

export default function Projects() {
  return (
    <div className="h-screen bg-hero2 bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full bg-black/50 backdrop-blur-[3px]">
        <div className="container mx-auto pt-32" data-aos="fade-up">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="mt-2 text-lg text-neutral-300">A list of projects I worked on so far.</p>

          <div className="mt-2 grid grid-cols-4 gap-4">
            <div className="flex cursor-pointer items-center justify-center rounded-lg border bg-background/50 px-8 py-8 transition-all hover:bg-background">
              <Image src={NorvexRoleplay} alt="Norvex Roleplay" />
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-lg border bg-background/50 px-8 py-8 transition-all hover:bg-background">
              <Image src={NorvexStudios} alt="NORVEX STUDIOS" className="w-[60%]" />
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-lg border bg-background/50 px-8 py-8 transition-all hover:bg-background">
              <Image src={Unfallexperten365} alt="Unfallexperten365" />
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-lg border bg-background/50 px-8 py-8 transition-all hover:bg-background">
              <Image src={LosSantosChronicles} alt="Los Santos Chronicles" className="w-[60%]" />
            </div>

            <div className="flex items-center justify-center rounded-lg border bg-background/50 p-4 font-[600]">
              There is more to come...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
