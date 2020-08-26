import styled, { css } from "styled-components";

export const CartItemContainer = styled.div`
  height: 70px;
  position: relative;
  display: flex;
`;

export const ItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;

  & img {
    object-fit: contain;
    width: 100%;
  }
`;

export const ItemText = styled.div`
  padding: 10px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
