import styled, { css } from "styled-components";

const increaseAndDecrease = css`
  padding: 10px;
  cursor: pointer;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  height: 130px;
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const ImageContainer = styled.div`
  width: 22%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 110px;
    object-fit: cover;
    width: 100%;
  }
`;

export const ItemIncrease = styled.div`
  ${increaseAndDecrease}
`;
export const ItemDecrease = styled.div`
  ${increaseAndDecrease}
`;

export const NormalSizedItem = styled.div`
  ${({ isIncreaseDecrease }) =>
    isIncreaseDecrease ? `display: flex; transform: translateX(-10px)` : ""};
  justify-content: left;
  align-items: center;
  width: 23%;
  padding: 0 10px;
`;

export const RemoveItem = styled.div`
  width: 8%;
  padding: 10px;
  cursor: pointer;
`;
