import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import GamesByGenreId from "../components/GamesByGenreId";
import GenreList from "../components/GenreList";
import TrendingGames from "../components/TrendingGames";
import GlobalApi from "../Services/GlobalApi";
import Header from "../components/Header";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [genresIdGames, setGenresIdGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const key = import.meta.env.VITE_API_key;
  const [selectedName, setSelectedName] = useState("Action");

  useEffect(() => {
    getAllgames();
    gamesByGenresId(4);
  }, []);

  const getAllgames = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
      setIsLoading(false);
    });
  };

  const gamesByGenresId = async (id) => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${key}&genres=${id}`
      );
      console.log(res.data.results);
      setGenresIdGames(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  const getSearchedGame = async (gameName) => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games/${gameName}?key=${key}`
      );
      if (!res.ok) throw new Error("Couldn't find game");
      setAllGameList(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <Header onSearch={getSearchedGame} />
      <div className="grid gap-1 md:gap-0 grid-cols-2 md:grid-cols-4 px-5">
        <div className="md:h-full col-span-1  left-0 z-20 md:block ">
          <GenreList
            genresId={(genresId) => gamesByGenresId(genresId)}
            selectGenresName={(name) => setSelectedName(name)}
          />
        </div>
        <div className=" col-span-1 md:col-span-3 ml-auto  h-full ">
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
    </div>
  );
}

export default Home;
