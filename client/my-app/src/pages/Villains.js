import "../Villains.css";
import { useState, useEffect } from "react";
import axios from "axios";
import VillainCard from "../components/VillainCard";

const Villains = () => {
  const [villains, setVillains] = useState([]);
  useEffect(() => {
    const fetchVillains = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/villains`);
        setVillains(res.data.villains);
        console.log(res.data.villains);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVillains();
  }, []);

  if (!villains) {
    return <h1>Loading Please Wait!</h1>;
  } else {
    return (
      <div className="villainDiv">
        {villains.map((villain) => (
          <VillainCard
            className="villainCardDiv"
            name={villain.name}
            image={villain.image}
            otherName={villain.otherName}
            anime={villain.anime}
            age={villain.age}
            organizations={villain.organizations}
          />
        ))}
      </div>
    );
  }
};
export default Villains;
