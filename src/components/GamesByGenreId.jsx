import { useEffect } from "react";

function GamesByGenreId(gameList) {
  useEffect(() => {
    console.log("game list", gameList);
  }, []);
  return (
    <div>
      {/* {gameList.map((item) => (
        <div key={item}>
          <img src={item.background_image} alt='' />
        </div>
      ))}  */}
    </div>
  );
}

export default GamesByGenreId;
