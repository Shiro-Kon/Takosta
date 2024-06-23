import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFoundPage  = (props: Props) => {
  return (
    <main className="grid h-screen place-items-center bg-light-gray-green px-6 content-center lg:px-8">
      <div className="text-center">
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl animate-fade-in-up">
          Сторінка в розробці
        </h1>
      
        <p className="mt-6 text-base leading-7 text-gray-600">Скоро щось буде</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-black/50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/40 transition duration-300 ease-in-out"
          >
            До головної
          </Link>
          
        </div>
        
      </div>
      <img src="./page under development/giphy-5.gif" alt="" className='w-[100px] h-[100px] mt-8'/>
    </main>
  )
}

export default NotFoundPage 