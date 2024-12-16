import { LandingSection, LandingSectionCard, LandingSectionHeightTypeEnum } from "@entities/landing";

import VideoSrc from "/videos/monzania.webm";
import {
  VideoSectionWidgetStyled
} from "@widgets/landing/video-section-widget/styled-components/video-section-widget.styled.ts";
import { YoutubeButton } from "@widgets/landing/video-section-widget/components/youtube-button.tsx";

export const VideoSectionWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.FULL}>
      <LandingSectionCard>
        <VideoSectionWidgetStyled>
          <video autoplay muted loop controls={false} playsinline preload={"none"}>
            <source src={VideoSrc} type="video/webm"/>
          </video>
          <YoutubeButton />
        </VideoSectionWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
