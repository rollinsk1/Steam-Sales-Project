import React from 'react'
import '../tailwind.css'
import '../twitter.css'

export default function TopSellers({ games }) {
    if(!games){
        return null
    }
  return (

    //Trying to gameID, internalName, thumb
    <div>
        {games}
        {/* {games.map((p) => (
        <div key={p}>{p.external}</div>
        ))} */}
    </div>
  )
}
