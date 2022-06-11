import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  // tracked states, value is the entire object that is retrieved from db, others are the displayed info
  const [value, setValue] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeType, setPokeType] = useState("");
  const [pokePhoto, setPokePhoto] = useState("https://cdn3d.iconscout.com/3d/premium/thumb/pokeball-4744505-3956098.png");

  // This API only has pokemon from 1-898 inclusive, so random number must be in that range
  
  let randomNumber = Math.floor(Math.random() * (898 + 1));
  
  // axios get that retrieves only one pokemon (which is hardcoded to the variable "name")
  const getPokemonData = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/" + randomNumber).then(
    (res) => {
      setValue(res);
  }).catch((error) => {
    console.log(error.message)
  })
  };

  // updates all of the states, only if it is not the first render of the app
useEffect(() => {
  if(!value){
    return;
  } else{
    setPokeName(value.data.name);
    setPokeType(value.data.types[0].type.name);
    setPokePhoto(value.data.sprites.front_shiny);
  }
  }, [value]);

  // what is actually rendered to the page, including the dynamic values
  return (
    <div className="App">
      <div className="title">
         Random Pokémon!
      </div>
      <div className="getButton">
         <button onClick={getPokemonData} className="glow-on-hover">Generate</button>
      </div>
      <div className="pokeName">
         {pokeName}
      </div>
      <div className="pokeType">
         {`Type: ${pokeType}`}
      </div>
      <div className="pokePhoto">
         <img src={pokePhoto} id="pokeImg" alt="pokeball or pokemon icon"></img>
      </div>
    </div>
  );
}

export default App;
