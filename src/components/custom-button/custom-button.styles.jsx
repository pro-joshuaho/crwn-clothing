import styled, { css } from "styled-components";

import CommonStyles from "../../common.styles";

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }

  return props.inverted ? InvertedCustomButtonStyles : ButtonStyles;
};

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    color: black;
    background-color: white;
    box-shadow: 0 0 0 1px black;
  }
`;

const InvertedCustomButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  box-shadow: inset 2px -2px 0 1px rgba(0, 0, 0, 0.836),
    inset 0.5px 0.3px 0 1px rgba(0, 0, 0, 0.822);

  &:hover {
    box-shadow: none;
    transform: translate(3px, 1px);
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 160px;
  width: auto;
  margin: 5px 10px;
  height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  ${getButtonStyles}
`;
