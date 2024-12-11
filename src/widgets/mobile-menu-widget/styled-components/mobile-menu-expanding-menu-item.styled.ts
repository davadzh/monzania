import { styled } from "goober";

export const MobileMenuExpandingMenuItemStyled = styled('div')<{_isExpanded: boolean;}>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    
    & > span {
      font-size: 22px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
    
    & > svg {
      transform: rotate(${({ _isExpanded }) => _isExpanded ? '180deg' : '0deg'});
      transition: transform 0.2s ease;
    }
  }
  
  & > span {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    
    & > div {
      font-size: 17px;
      font-weight: 500;
      line-height: 17px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;