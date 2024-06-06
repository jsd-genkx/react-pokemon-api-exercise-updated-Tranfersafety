import axios from "axios";
import { useEffect, useState } from "react";

const PokemonBasicFetchAxios = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        setPokemonData(response.result);
        // fetch data from api

        setPokemonData(response.data.results);
        // handle data
      } catch (error) {
        // handle error
        setError(error.message);
      } finally {
        // handle loading
        setLoading(false);
      }
    };
    // invoke function
    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold">Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonBasicFetchAxios;
