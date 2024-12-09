import { styled } from "goober";

export const GiftBoxBlockStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  background-size: contain;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #F1DA60 0%, #F5DC5D 28.64%, #E3C845 62.45%, #CEB439 84.05%, #C4AB36 100%);

  & > div {
    padding: 40px;
    font-size: 37px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
  }

  & > img {
    object-fit: contain;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  
  & > button {
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
`;