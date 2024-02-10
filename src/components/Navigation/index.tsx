import Animator from './Animator'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  return (
    <div className="absolute z-[999] w-screen">
      <div className="container mx-auto">
        <Animator>
          <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border bg-white/40 px-4 py-4 backdrop-blur-md dark:bg-black/50">
            <div className="text-lg font-bold">Hey! Welcome to my website.</div>
            {/* <div className="flex items-center gap-4"></div> */}
            <div>{/* <ThemeToggle /> */}</div>
          </div>
        </Animator>
      </div>
    </div>
  )
}
