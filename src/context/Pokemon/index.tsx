import { createContext, useContext, useEffect, useState } from "react";
import api from "services";

type PokemonType = {
  id: string;
  name: string;
  num: string;
  img: string;
  type: string[];
};

type PokemonContextType = {
  setPokemonName: (value: string) => void;
  filterPokemon: () => PokemonType[];
  loading: boolean;
};

export const PokemonContext = createContext({} as PokemonContextType);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api({
      method: "GET",
    })
      .then((res) => {
        setPokemons(res.data.pokemon);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filterPokemon = () => {
    const filteredPokemon = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()) ||
        pokemon.num.includes(pokemonName)
    );

    return filteredPokemon;
  };

  return (
    <PokemonContext.Provider value={{ setPokemonName, filterPokemon, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
