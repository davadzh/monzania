import { styled } from "goober";

export const MobilePageLinksStyled = styled('div')`
  position: absolute;
  top: 124px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  justify-content: center;
  width: 100%;
  max-height: calc(100vh - 124px);
  overflow: auto;
`;