import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.primary};
  color: ${({ theme }) => theme.colors.gray.primary};
  font-size: 30px;
  padding: 20px 0;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black.primary};
  padding: 20px 0;
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.primary};
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 25px;
  padding-bottom: 5px;
`;
