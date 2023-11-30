import axios from "axios";

const apikey = import.meta.env.VITE_API_key;
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=${apikey}`);
const getAllGames = axiosCreate.get(`/games?key=${apikey}`);

export default {
  getGenreList,
  getAllGames,
};
