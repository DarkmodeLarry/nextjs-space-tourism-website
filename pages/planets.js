import Image from 'next/image'
import Titan from '../public/assets/destination/image-titan.webp'

function Planets() {
  return (
    <div className="flex justify-center items-center text-center flex-col max-w-full overflow-hidden  planets bg-no-repeat min-h-screen bg-cover bg-[url('../public/assets/destination/background-destination-desktop.jpg')] md:bg-[url('../public/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../public/assets/destination/background-destination-desktop.jpg')] ">
      <div className='flex flex-col items-center justify-center space-y-12'>
        <section>
          <h2 className='planetHeader'>pick your destination</h2>
          <Image src={Titan} alt='Titan Planet' height={250} width={250} />
        </section>
        <section className='w-4/5 space-y-8'>
          <ul className='flex justify-center space-x-10 text-center uppercase planetNav'>
            <li>EARTH</li>
            <li>MOON</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>
          <h1 className='text-center text-8xl'>TITAN</h1>
          <p>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away
            from home (just a few hundred degrees colder!). As a bonus, you get striking views of
            the Rings of Saturn.
          </p>
          <hr className='hr' />
          <section className='planetDistance'>
            <h5>AVG. DISTANCE</h5>
            <h4>1.6 BIL.KM</h4>
          </section>
          <section className='planetDistance'>
            <h5>EST. TRAVEL TIME</h5>
            <h4>7 YEARS</h4>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Planets
