import React from 'react'
import '../tailwind.css'

export default function TopSellers({ games }) {
    if(!games){
        return null
    }
  return (
    //Trying to gameID, internalName, thumb
    <div className='content-center'>
        {games.map(g => (
            <div key={g}>{g}</div>
        ))}
    </div>
  )
}
