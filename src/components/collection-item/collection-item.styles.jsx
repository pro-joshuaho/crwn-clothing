import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const NameAndPrice = css`
  padding: 4px;
  margin: 0 2px;
`;

export const CollectionItemContainer = styled.div`
  min-width: 200px;
  cursor: pointer;
  overflow: hidden;
  margin: 10px 5px;
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
`;
export const CollectionFooter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
export const CollectionFooterName = styled.div`
  ${NameAndPrice}
`;

export const CollectionFooterPrice = styled.div`
  ${NameAndPrice}
`;

export const CollectionButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 230px;
  display: none;
  outline: none;
`;
