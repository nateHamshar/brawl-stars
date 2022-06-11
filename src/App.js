import axios from "axios";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("oi");

  const name = "squirtle";
  const getPokemonData = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/" + name).then(
    (res) => {
    pokemon = res
    setValue(pokemon.data.name)
  }).catch((error) => {
    console.log(error)
  })
};



let pokemon = {};

  return (
    <div className="App">
      <h1>New Project!</h1>
      <button onClick={getPokemonData}>Get Pokemon Data</button>
      <p className="pokemonName">{value}</p>
    </div>
  );
}

export default App;
