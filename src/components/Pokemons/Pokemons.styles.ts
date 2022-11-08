import styled from "styled-components";

import * as S from "components/Container/Container.styles";

export const Container = styled(S.Container)<{ loader: boolean }>`
  ${({ loader }) =>
    loader &&
    `
    display: flex;
    justify-content: center;
    height: calc(100vh - 191px);
    align-items: center;
    `}
`;
