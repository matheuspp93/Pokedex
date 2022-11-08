import NotFoundImage from "assets/img/not_found.svg";
import * as S from ".//NotFound.styles";

const NotFound = () => (
  <S.Box>
    <S.NotFoundImage src={NotFoundImage} alt="Not Found" />
    <S.NotFoundMessage>No Results Found</S.NotFoundMessage>
  </S.Box>
);

export default NotFound;
