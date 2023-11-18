import { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);
  return (
    <div className='relative'>
      <div className='absolute bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full'>
        <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
        <button className='bg-blue-700 text-white px-2 p-1'>Get now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className='md:h-[320px] w-full object-cover rounded-xl'
        alt=''
      />
    </div>
  );
}

export default Banner;
