import styled from "styled-components";

export const Box = styled.div`
  display: inline-flex;
`;

export const Input = styled.input`
  position: relative;
  height: 40px;
  border: none;
  width: 200px;
  margin: 0 10px 0 0;
  border-radius: 4px;
  padding-left: 10px;
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 16px;
  transition: all 0.3s;

  @media (max-width: 400px) {
    width: 240px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.orange.primary};
  height: 40px;
  width: 40px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:nth-of-type(1) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange.secondary};
  }

  svg {
    fill: ${({ theme }) => theme.colors.white.primary};
  }
`;
