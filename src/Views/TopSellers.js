import React from 'react'
import '../tailwind.css'
import '../Components/TopSellers.css'

export default function TopSellers({ games }) {
    if(!games){
        return null
    }
  return (
    //Trying to gameID, internalName, thumb
        <div className='w-full mb-12 px-4'>
            <div className='text-white text-center'>
                {games.map(g => (
                <div key={g}>{g}</div>
                ))}
            </div>
        </div>
  )
}
