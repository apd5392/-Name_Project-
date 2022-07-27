import '../Anime.css';
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
      <div className="animeDiv">
        {animes.map((anime) => (
          <AnimeCard className="AnimeCardDiv"
            name={anime.name}
            image={anime.image}
            episodes={anime.episodes}
          />
        ))}
      </div>
    );
  }
};

export default Animes;
