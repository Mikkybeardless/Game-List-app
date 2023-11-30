function GamesByGenreId({ gameById, selectedName }) {
  return (
    <div className='mt-5'>
      <h2 className='text-[30px] dark:text-white font-bold'>
        {selectedName} Games
      </h2>
      <div
        className=' gap-6  grid
      mt-5 grid-cols-1  md:grid-cols-2  lg:grid-cols-3'
      >
        {gameById.map(
          (item, index) =>
            index < 6 && (
              <div
                key={item.id}
                className=' bg-[#76a8f75e] h-[500px] pb-20 p-2 rounded-lg group hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out'
              >
                <img
                  src={item.background_image}
                  className='h-[80%] w-full rounded-xl object-cover'
                />
                <h2 className='dark:text-white p-3 text-[20px] font-bold'>
                  {item.name}
                  <span className='p-1 ml-2 bg-green-100 text-green-700 text-[10px] rounded-sm font-medium'>
                    {item.metacritic}
                  </span>
                </h2>
                <h2 className='dark:text-gray-300 ml-2 text-gray-500'>
                  ⭐{item.rating} 💭{item.reviews_count} 🔥
                  {item.suggestions_count}
                </h2>
                <h3 className='dark:text-white p-3 text-[15px]'>
                  Release Date: {item.released}
                </h3>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default GamesByGenreId;
