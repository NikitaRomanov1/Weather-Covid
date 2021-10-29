import styled from "styled-components";
import { theme } from "./theme";

export const NavbarStyle = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 15px;
  background: ${theme.colors.darkBlue};
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Text = styled.span`
  font-size: 24px;
  font-weight: normal;
  color: white;
`;

export const Input = styled.input`
  height: calc(2.25rem + 2px);
  width: 100%;
  border: 1px solid white;
  border-radius: ${theme.border.radius};
  text-align: left;
  &:focus {
    outline: 0;
  }
`;
export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2rem;
  border: 1px solid ${theme.colors.lightGrey};
  background-color: ${theme.colors.lightGrey};
  cursor: pointer;
  border-top-right-radius: ${theme.border.radius};
  border-bottom-right-radius: ${theme.border.radius};
  &:hover {
    background-color: ${theme.colors.darkGrey};
  }
`;
