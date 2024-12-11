import { styled } from "goober";

export const MobileMenuHeaderStyled = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  width: 100%;
  padding: 10px 10px 0 10px;
  
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    
    & > svg {
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;