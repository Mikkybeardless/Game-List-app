import Banner from "../components/Banner";
import GamesByGenreId from "../components/GamesByGenreId";
import GenreList from "../components/GenreList";
import TrendingGames from "../components/TrendingGames";
import GlobalApi from "../Services/GlobalApi";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [genresIdGames, setGenresIdGames] = useState([]);
  const key = "4d1f00b3bb694bb6ad8a0032d0e6b045";
  const [selectedName, setSelectedName] = useState("Action");

  useEffect(() => {
    getAllgames();
    gamesByGenresId(4);
  }, []);

  const getAllgames = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const gamesByGenresId = async (id) => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${key}&genres=${id}`
      );
      console.log(res.data.results);
      setGenresIdGames(res.data.results);
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='h-full hidden md:block '>
        <GenreList
          genresId={(genresId) => gamesByGenresId(genresId)}
          selectGenresName={(name) => setSelectedName(name)}
        />
      </div>
      <div className=' col-span-4 md:col-span-3  h-full '>
        {allGameList.length > 0 && genresIdGames.length > 0 && (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames trendingGames={allGameList} />
            <GamesByGenreId
              gameById={genresIdGames}
              selectedName={selectedName}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
