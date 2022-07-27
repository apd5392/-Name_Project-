import { useState, useEffect } from 'react'
import axios from 'axios'
import HeroCard from '../components/HeroCard'

const Heroes = () => {
    const [heroes, setHero] = useState([]);
  
    useEffect(() => {
      const fetchHero = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/heroes`);
          setHero(res.data.heroes);
          console.log(res.data.heroes);
        } catch (error) {
          console.log(error);
        }
      };
      fetchHero();
    }, []);
  
    if (!heroes) {
      return <h1>Loading Please Wait!</h1>
    } else {
      return (
        <div className="div">
          {heroes.map((hero) => (
            <HeroCard
              name={hero.name}
              image={hero.image}
              otherName={hero.otherName}
              anime={hero.anime}
              age={hero.age}
              mortality={hero.aliveOrDeath}
              organization={hero.organizations}
            />
          ))}
        </div>
      );
    }
  };
  
  export default Heroes;