import styled from "styled-components";
import colors from "styles/theme/colors";

export const PokemonList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 50px 0;
`;

export const PokemonCard = styled.li`
  display: flex;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    width: 33.333%;
  }

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Pokemon = styled.div`
  margin-bottom: 50px;
  width: 100%;

  span {
    display: block;
  }

  li {
    font-family: ${({ theme }) => theme.typography.primary};
  }
`;

export const PokemonImage = styled.img`
  height: 255px;
  width: 100%;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.white.secondary};

  @media (max-width: 570px) {
    height: 220px;
  }
`;

export const PokemonId = styled.span`
  font-family: ${({ theme }) => theme.typography.primary};
  color: ${({ theme }) => theme.colors.gray.secondary};
  font-size: 0.85rem;
  padding: 5px 0 0;
`;

export const PokemonName = styled.span`
  font-size: 1.5rem;
  padding: 10px 0 5px;
  font-family: ${({ theme }) => theme.typography.secondary};
`;

export const PokemonTypeList = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

export const PokemonType = styled.li<{ pokemonType: string; theme: any }>`
  font-size: 0.85rem;
  padding: 4px 8px;
  width: 81px;
  text-align: center;
  border-radius: 4px;
  margin-right: 4px;

  ${({ pokemonType }) => {
    switch (pokemonType) {
      case "Grass":
        return `
        background-color: ${colors.green.primary};
        `;
      case "Poison":
        return `
        background-color: ${colors.purple.primary};
        color: ${colors.white.primary};
        `;
      case "Fire":
        return `
        background-color: ${colors.orange.tertiary};
        color: ${colors.white.primary};
        `;
      case "Flying":
        return `
        background-color: ${colors.white.tertiary};
        `;
      case "Water":
        return `
        background-color: ${colors.blue.primary};
        color: ${colors.white.primary};
        `;
      case "Bug":
        return `
        background-color: ${colors.blue.secondary};
        color: ${colors.white.primary};
        `;
      case "Normal":
        return `
        background-color: ${colors.yellow.primary};
        color: ${colors.white.primary};
        `;
      case "Electric":
        return `
        background-color: ${colors.purple.secondary};
        color: ${colors.white.primary};
        `;
      case "Ground":
        return `
        background-color: ${colors.brown.primary};
        color: ${colors.white.primary};
        `;
      case "Fighting":
        return `
        background-color: ${colors.blue.tertiary};
        color: ${colors.white.primary};
        `;
      case "Psychic":
        return `
        background-color: ${colors.blue.quartiary};
        color: ${colors.white.primary};
        `;
      case "Rock":
        return `
        background-color: ${colors.gray.tertiary};
        color: ${colors.white.primary};
        `;
      case "Ghost":
        return `
          background-color: ${colors.gray.quartiary};
          color: ${colors.white.primary};
          `;
      case "Ice":
        return `
          background-color: ${colors.white.quartiary};
          `;
      case "Dragon":
        return `
          background-color: ${colors.orange.quartiary};
          color: ${colors.white.primary};
          `;
    }
  }};
`;
