import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { AboutGameStyled } from "@widgets/landing/about-game/styled-components/about-game.styled.ts";
import { AboutGameInfo } from "@widgets/landing/about-game/components/about-game-info.tsx";
import { Carousel } from "@shared/ui/carousel";
import CarouselImagePhoto1 from "/images/carousel-photo-1.png";
import CarouselImagePhoto2 from "/images/carousel-photo-2.png";
import CarouselImagePhoto3 from "/images/carousel-photo-3.png";
import CarouselImagePhoto4 from "/images/carousel-photo-4.png";
import CarouselImagePhoto5 from "/images/carousel-photo-5.png";
import CarouselImagePhoto6 from "/images/carousel-photo-6.png";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";

export const AboutGame = () => {
  const {isMobile} = useIsMobile();
  const sectionHeightType = isMobile ? LandingSectionHeightTypeEnum.MAX_CONTENT : LandingSectionHeightTypeEnum.FULL;

  return (
    <LandingSection heightType={sectionHeightType}>
      <LandingSectionCard>
        <AboutGameStyled>
          <Carousel imageSrcList={[
            CarouselImagePhoto1,
            CarouselImagePhoto2,
            CarouselImagePhoto3,
            CarouselImagePhoto4,
            CarouselImagePhoto5,
            CarouselImagePhoto6,
          ]} />
          <AboutGameInfo />
        </AboutGameStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
