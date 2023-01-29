export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-full min-h-screen overflow-hidden lg:justify-between lg:flex-row app'>
      <section className='flex flex-col justify-center m-10 lg:m-0 lg:w-1/2 lg:pl-32'>
        <h2 className='text-[var(--blues)] uppercase tracking-widest heading lg:text-left text-center py-10'>
          so, you want to travel to
        </h2>
        <h1 className='pb-10 text-center lg:text-left text-8xl md:text-9xl'>space</h1>
        <p className='leading-8 text-center lg:text-left md:px-44 main-content lg:px-0 lg:w-[500px]'>
          Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer
          space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll
          give you a truly out of this world experience!
        </p>
      </section>
      <section className='relative transition-all duration-300 bg-white bg-opacity-0 rounded-full lg:mt-32 lg:mr-32 outercircle hover:bg-opacity-10 ease'>
        <div className='innercircle'>
          <p className='text-[var(--bellefair)] text-2xl'>EXPLORE</p>
        </div>
      </section>
    </div>
  )
}
