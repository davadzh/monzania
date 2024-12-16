import YoutubeIcon from "@vectors/youtube-icon.svg?react";
import { YoutubeButtonStyled } from "@widgets/landing/video-section-widget/styled-components/youtube-button.styled.ts";

export const YoutubeButton = () => {

  const openYoutubeVideo = () => {
    window.open('https://youtu.be/P-fOx35hKUQ', '_blank');
  }

  return (
    <YoutubeButtonStyled onClick={openYoutubeVideo}>
      <YoutubeIcon />
      <div>Смотреть на YouTube</div>
    </YoutubeButtonStyled>
  );
};
