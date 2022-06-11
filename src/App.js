import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [pokeName, setPokeName] = useState("Name:");
  const [pokeType, setPokeType] = useState("Types");
  const [pokePhoto, setPokePhoto] = useState("https://cdn3d.iconscout.com/3d/premium/thumb/pokeball-4744505-3956098.png");

  const name = "bulbasaur";
  const getPokemonData = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/" + name).then(
    (res) => {
      setValue(res);
  }).catch((error) => {
    console.log(error)
  })
};

useEffect(() => {
  if(!value){
    console.log("empty")
  } else{
    setPokeName(value.data.name);
    setPokeType(value.data.types[0].type.name);
    setPokePhoto(value.data.sprites.front_shiny);
  }
}, [value]);

  return (
    <div className="App">
      <div className="title">
       Pokemon Data App
      </div>
      <div className="getButton">
      <button onClick={getPokemonData} class="glow-on-hover">Get Pokemon Data</button>
      </div>
      <div className="pokeName">
        {pokeName}
      </div>
      <div className="pokeType">
        {pokeType}
      </div>
      <div className="pokePhoto">
      <img src={pokePhoto} id="pokeImg"></img>
      </div>
    </div>
  );
}

export default App;
