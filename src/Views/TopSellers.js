import React, { useState } from 'react';
import '../tailwind.css'
import '../Components/TopSellers.css'

export default function TopSellers({ games, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };


  if (!Array.isArray(games)) {
    return null
  }

  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='mb-8'>
        <form onSubmit={handleSubmit}>
          <label className='sr-only'>Search for a game</label>
          <div className='flex'>
            <input type='text' placeholder='Search for a game...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='border border-gray-400 rounded-l-md px-4 py-2 flex-1' />
            <button type='submit' className='bg-gray-900 text-white px-4 rounded-r-md'>Search</button>
          </div>
        </form>
      </div>
      <div className='max-h-screen overflow-y-scroll'>
        {games.map(game => (
          <div key={game.gameID} className='max-w-sm w-full lg:max-w-full lg:flex mx-auto mb-8'>
            <div className='bg-white shadow-sm rounded-lg overflow-hidden mx-auto'>
              <div className='relative pb-1/2'>
                <img className='absolute h-full w-full object-cover' src={game.thumb} alt={game.internalName} />
                <img className='absolute h-full w-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300' src={game.external} alt={game.internalName} />
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{game.internalName}</h3>
                <p className='mt-1 text-sm text-gray-600'>{game.gameID}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
