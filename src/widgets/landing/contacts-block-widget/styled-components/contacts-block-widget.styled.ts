import { styled } from "goober";

export const ContactsBlockWidgetStyled = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  background: rgba(232, 249, 244, 1);
  width: 100%;
  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    
    & > span {
      &:nth-child(1) {
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: rgba(0, 0, 0, 0.5);
      }
      
      &:nth-child(2) {
        font-size: 40px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: -0.5px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: rgba(33, 195, 177, 1);
      }
    }
  }
`;