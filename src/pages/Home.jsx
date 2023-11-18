import Banner from "../components/Banner";
import GamesByGenreId from "../components/GamesByGenreId";
import GenreList from "../components/GenreList";
import TrendingGames from "../components/TrendingGames";
import GlobalApi from "../Services/GlobalApi";
import { useState, useEffect } from "react";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  useEffect(() => {
    getAllgames();
    getGameListByGenresId();
  }, []);

  const getAllgames = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };
  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(4).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='h-full hidden md:block '>
        <GenreList />
      </div>
      <div className=' col-span-4 md:col-span-3  h-full '>
        {allGameList.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames trendingGames={allGameList} />
            <GamesByGenreId gameList={gameListByGenres} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
