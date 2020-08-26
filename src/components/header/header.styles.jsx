import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyled = css`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 39px;
  width: 50px;
`;

export const OptionsContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyled}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyled}
`;
