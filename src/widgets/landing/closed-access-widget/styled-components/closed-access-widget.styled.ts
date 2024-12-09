import { styled } from "goober";

export const ClosedAccessWidgetStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 600px;
  height: calc(100% - 80px);
  width: 100%;
  margin: 40px;
  box-sizing: border-box;
  background: rgba(240, 250, 227, 1);
  border-radius: 20px;
  overflow: hidden;
  
  & > div {
    &:nth-child(1) {
      margin-top: 40px;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.6);
    }
    
    &:nth-child(2) {
      margin-top: 8px;
      margin-bottom: 27px;
      font-size: 37px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.5px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 1);
    }
  }
  
  & > img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
`;