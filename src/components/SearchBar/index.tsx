import { useState } from "react";
import { usePokemon } from "context/Pokemon";
import { FaSearch } from "react-icons/fa";
import * as S from "./SearchBar.styles";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const { setPokemonName } = usePokemon();

  return (
    <S.Box>
      <S.Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <S.Button onClick={() => setPokemonName(value)}>
        <FaSearch />
      </S.Button>
    </S.Box>
  );
};

export default SearchBar;
