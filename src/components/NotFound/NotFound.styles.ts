import styled from "styled-components";

export const Box = styled.div`
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundMessage = styled.span`
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 20px;
`;

export const NotFoundImage = styled.img`
  width: 270px;
  height: auto;

  margin-bottom: 30px;
`;
