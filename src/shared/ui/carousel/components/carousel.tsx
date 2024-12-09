import { CarouselStyled } from "@shared/ui/carousel/styled-components/carousel.styled.ts";
import { CarouselImgStyled } from "@shared/ui/carousel/styled-components/carousel-img.styled.ts";
import { useState } from "preact/hooks";
import { CarouselMiniImgListStyled } from "@shared/ui/carousel/styled-components/carousel-mini-img-list.styled.ts";
import { CarouselMiniImgStyled } from "@shared/ui/carousel/styled-components/carousel-mini-img.styled.ts";

interface CarouselProps {
  imageSrcList: Array<string>;
}

export const Carousel = (props: CarouselProps) => {
  const { imageSrcList } = props;

  const [currentImageSrc, setCurrentImageSrc] = useState<string>(imageSrcList[0]);

  return (
    <CarouselStyled>
      <CarouselImgStyled src={currentImageSrc}/>
      <CarouselMiniImgListStyled>
        {imageSrcList.map((src, idx) => (
          <CarouselMiniImgStyled
            src={src}
            onClick={() => setCurrentImageSrc(src)}
            _isActive={src === currentImageSrc} key={idx}
          />
        ))}
      </CarouselMiniImgListStyled>
    </CarouselStyled>
  );
};
