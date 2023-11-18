import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ genresId, selectGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white '>Genre </h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genresId(item.id);
            selectGenresName(item.name);
          }}
          className={`flex gap-2 items-center mb-2 hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600
          cursor-pointer group ${
            activeIndex == index && `bg-gray-300 dark:bg-gray-600`
          } `}
          key={item.id}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex == index && `scale-105`
            } `}
            alt=''
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex == index && `font-bold `
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
