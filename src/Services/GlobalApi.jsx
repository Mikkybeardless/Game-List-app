import axios from "axios";
const apikey = "4d1f00b3bb694bb6ad8a0032d0e6b045";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=${apikey}`);
const getAllGames = axiosCreate.get(`/games?key=${apikey}`);

// const getGameListByGenreId = (id) =>
//   axiosCreate.get(`/games?key=${apikey}&genres=${id}`);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + apikey + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
