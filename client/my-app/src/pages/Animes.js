import { useState, useEffect } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";

const Animes = () => {
  const [animes, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/animes`);
        setAnime(res.data.animes);
        console.log(res.data.animes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnime();
  }, []);

  if (!animes) {
    return <h1>Loading Please Wait!</h1>
  } else {
    return (
      <div className="div">
        {animes.map((anime) => (
          <AnimeCard
            name={anime.name}
            image={anime.image}
            otherName={anime.otherName}
            episodes={anime.episodes}
          />
        ))}
      </div>
    );
  }
};

export default Animes;
