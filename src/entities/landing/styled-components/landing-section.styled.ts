import { styled } from "goober";
import { LandingSectionHeightTypeEnum } from "@entities/landing/enums/landing-section-height-type-enum.ts";

export const LandingSectionStyled = styled('div')<{_heightType: LandingSectionHeightTypeEnum}>`
  width: 100vw;
  min-height: ${props => {
    const {_heightType} = props;
    switch (_heightType) {
      case LandingSectionHeightTypeEnum.FULL:
        return "100vh";
      case LandingSectionHeightTypeEnum.MAX_CONTENT:
        return 'max-content';
    }
  }};
  display: flex;
  flex-direction: column;
  column-gap: 8px;
`;