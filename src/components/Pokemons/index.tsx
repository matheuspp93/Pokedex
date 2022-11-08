import { usePokemon } from "context/Pokemon";
import ReactLoading from "react-loading";
import PokemonList from "components/PokemonList";
import * as S from "./Pokemons.styles";

const Pokemons = () => {
  const { loading } = usePokemon();

  return (
    <S.Container loader={loading}>
      {loading ? <ReactLoading type="spin" color="#636e72" /> : <PokemonList />}
    </S.Container>
  );
};

export default Pokemons;
