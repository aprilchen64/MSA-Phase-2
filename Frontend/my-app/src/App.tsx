import axios from "axios";
import { useState } from "react";
import BackgroundImage from '../src/background.jpeg';
import "./App.css";
import { Box, Button, Grid, Paper, Skeleton } from "@mui/material";

function App() {
  // Declare a new state variable, which we'll call "villager"
  const [villager, setVillager] = useState<undefined | any>(undefined);
  const [villagerName, setVillagerName] = useState<undefined | any>(undefined);

  const BASE_API_URL = "https://acnhapi.com/v1/villagers/";

  const styles = {
    paperContainer: {
        backgroundImage: `url(${BackgroundImage})`,
        height: '100vh'
    }
};

  

  return (
    <div style={styles.paperContainer}>
      <h1>Animal Crossing Villagers Info</h1>

      <div>
        <Button variant="contained" onClick={search}>New Villager</Button>
      </div>

      {villager === undefined ? (
        <div></div>
      ) : (
        <div id="villager-result">
          <h3>{villagerName}</h3>
          <img src={villager["image_uri"]} />
          <p>Birthday: {villager["birthday-string"]}</p>
          <p>Species: {villager["species"]}</p>
          <p>Gender: {villager["gender"]}</p>

          <p>Catch phrase: {villager["catch-phrase"]}</p>
          
          <p>Hobby: {villager["hobby"]}</p>
          <p>Personality: {villager["personality"]}</p>
          <p>Saying: {villager["saying"]}</p>
          

          <p>Bubble colour: {villager["bubble-color"]}</p>
          <p>Text colour: {villager["text-color"]}</p>
        </div>

        
      )}

    </div>
  );

  function search() {
    // Generate a random villager id
    const id = Math.floor(Math.random() * 391) + 1;

    console.log(BASE_API_URL + id) // comment out when finished
    axios.get(BASE_API_URL + id).then((res) => {
      setVillager(res.data);
      setVillagerName(res.data.name["name-USen"]);
      console.log(res.data);
    });
  }
}

export default App;