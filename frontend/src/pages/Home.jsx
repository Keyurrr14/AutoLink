import React from 'react'
import map from "../assets/images/map.webp"

const Home = () => {
  return (
    <div className='relative'>
      <h1 className='absolute top-5 left-5 text-3xl font-UberMoveMedium'>
        AutoLink
      </h1>
      <div className="h-screen w-screen">
        <img className='w-full h-full object-cover' src={map} alt="" />
      </div>
      <div>
        <h1>
          Find a trip
        </h1>
        <form>
          <input type="text" name="" id="" />
        </form>
      </div>
    </div>
  )
}

export default Home
