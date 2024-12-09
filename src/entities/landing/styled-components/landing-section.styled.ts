import { styled } from "goober";
import { LandingSectionHeightTypeEnum } from "@entities/landing/enums/landing-section-height-type-enum.ts";

export const LandingSectionStyled = styled('div')<{_heightType: LandingSectionHeightTypeEnum}>`
  width: 100vw;
  height: ${props => {
    const {_heightType} = props;
    switch (_heightType) {
      case LandingSectionHeightTypeEnum.FULL:
        return "100vh";
      case LandingSectionHeightTypeEnum.ALMOST_FULL:
        return "calc(100vh - 16px)";
      case LandingSectionHeightTypeEnum.MAX_CONTENT:
        return 'max-content';
    }
  }};
  min-height: ${props => {
    const {_heightType} = props;
    switch (_heightType) {
      case LandingSectionHeightTypeEnum.FULL:
      case LandingSectionHeightTypeEnum.ALMOST_FULL:
        return "680px";
      case LandingSectionHeightTypeEnum.MAX_CONTENT:
        return '0';
    }
  }};
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;