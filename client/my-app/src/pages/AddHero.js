import "../addHero.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddHero() {
  let [name, setName] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [otherName, setOtherName] = useState([]);
  let [anime, setAnime] = useState("");
  let [age, setAge] = useState("");
  let [organizations, setOrganization] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value); //allows for imput in text box
  };
  const handleotherNameChange = (e) => {
    console.log(e.target.value);
    setOtherName(e.target.value);
  };
  const handleAnimeChange = (e) => {
    console.log(e.target.value);
    setAnime(e.target.value);
  };
  const handleAgeChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  const handleOrganizationChange = (e) => {
    console.log(e.target.value);
    setOrganization(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the refresh (form behavior)
    console.log(name);
    setSubmitted(true);
  };
  const addheroDB = async () => {
    let hero = {
      name: name,
      otherName: otherName,
      anime: anime,
      age: parseInt(age),
      organizations: organizations,
    };
    await axios.post("http://localhost:3001/heroes", hero);
  };
  useEffect(() => {
    if (submitted) {
      addheroDB();
      console.log("submit");
      setSubmitted(false);
    } else {
      console.log("Nothing");
    }
  }, [submitted]);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h2>Hero Information:</h2>
        <label className="inputTitles">Name: </label>
        <input type="text" value={name} onChange={handleNameChange}></input>
        <br></br>
        <label className="inputTitles">Other Names: </label>
        <input
          type="text"
          value={otherName}
          onChange={handleotherNameChange}
        ></input>
        <br></br>
        <label className="inputTitles">Anime's: </label>
        <input type="text" value={anime} onChange={handleAnimeChange}></input>
        <br></br>
        <label className="inputTitles">Age: </label>
        <input type="text" value={age} onChange={handleAgeChange}></input>
        <br></br>
        <label className="inputTitles">Groups: </label>
        <input
          type="text"
          value={organizations}
          onChange={handleOrganizationChange}
        ></input>
        <br></br>
        <button type="submit">Add Hero</button>
      </form>
    </div>
  );
}