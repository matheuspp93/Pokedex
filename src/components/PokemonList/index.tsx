import NotFound from "components/NotFound";
import { usePokemon } from "context/Pokemon";
import * as S from "./PokemonList.styles";

const PokemonList = () => {
  const { filterPokemon } = usePokemon();

  const pokemons = filterPokemon();

  return pokemons.length > 0 ? (
    <S.PokemonList>
      {pokemons.map(({ id, img, num, name, type }) => (
        <S.PokemonCard key={id}>
          <S.Pokemon key={id}>
            <S.PokemonImage src={img} alt={name} />
            <S.PokemonId>#{num}</S.PokemonId>
            <S.PokemonName>{name}</S.PokemonName>
            <S.PokemonTypeList>
              {type.map((item, index) => (
                <S.PokemonType pokemonType={item} key={index}>
                  {item}
                </S.PokemonType>
              ))}
            </S.PokemonTypeList>
          </S.Pokemon>
        </S.PokemonCard>
      ))}
    </S.PokemonList>
  ) : (
    <NotFound />
  );
};

export default PokemonList;
