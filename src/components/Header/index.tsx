import SearchBar from "components/SearchBar";
import { Container } from "components/Container/Container.styles";
import * as S from "./Header.styles";

const Header = () => (
  <>
    <Container>
      <S.Title>Pokédex</S.Title>
    </Container>

    <S.Header>
      <Container>
        <S.SubTitle>Name or Number</S.SubTitle>
        <SearchBar />
      </Container>
    </S.Header>
  </>
);

export default Header;
