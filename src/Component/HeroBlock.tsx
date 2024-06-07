import { Link } from 'react-router-dom'

type Props = {}

const HeroBlock = (props: Props) => {
  return (
    <div className="static">
        <div >
            <img src="./Images/Heroblock/Heroblok.png" alt="" className='absolute inset-x-0 -z-50 w-full'/>
        </div>
          
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <img src="./Images/TAKOSTA_logo.png" alt="" />
            <div className="mt-[160px] flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-sm border  bg-white/20 px-6 py-2.5 text-3xl font-light text-almost-white shadow-sm duration-300 ease-out delay-100 hover:bg-white/60 hover:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Перейти до каталогу
              </Link>
              
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

export default HeroBlock