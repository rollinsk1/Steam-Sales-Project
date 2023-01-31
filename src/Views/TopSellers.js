import React from 'react'
import '../tailwind.css'
import '../Components/TopSellers.css'

export default function TopSellers({ games }) {
    if(!games){
        return null
    }
  return (
    //Trying to gameID, internalName, thumb
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
        {games.map(g => (
        <div className='text-center h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug"' key={g}>{g}</div>
        ))}
    </div>
  )
}