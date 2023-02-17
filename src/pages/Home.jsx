import React from 'react'
import KamEL from "../Images/KamEl.jpeg"

const Home = () => {
  return (
    <div>
      <div className='w-full flex justify-center mt-7'>
        <div className="text-3xl font-bold ">Wir sind Bosses </div>
      </div>
      <img src={KamEL} />
    </div>
  )
}

export default Home