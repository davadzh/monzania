import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import {
  FromAuthorWidgetStyled
} from "@widgets/landing/from-author-widget/styled-components/from-author-widget.styled.ts";
import AuthorPhotoImageSrc from "/images/author-photo.png";
import AuthorSignImageSrc from "/images/sign-image.png";

export const FromAuthorWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.FULL}>
      <LandingSectionCard>
        <FromAuthorWidgetStyled>
          <img src={AuthorPhotoImageSrc} alt="Мишка Анастасия"/>
          <div>
            <p>Как-то на каникулах мы с детьми довольно много играли в карточные игры. «Если бы в них была хоть капелька смысла» -подумала я. И решила придумать свою. Мысль о том, что во время игры дети могут усвоить почти любую информацию, в легкой и непринужденной форме, как маме троих детей, мне показалась волшебной.</p>
            <p>Мир гаджетов и быстроизменяющихся картинок, как ни крути, довольно сильно повлиял на формирование эмоционального фона детей, поэтому главная идея Монзании — развитие эмоционального интеллекта — родилась мгновенно.</p>
            <p>Отдельно хочу заметить, что в разработке игры принимали активное участие мои дети, 5, 7 и 9 лет, так что «Монзания» не просто придумана для детей,
              но и разработана ими.</p>
            <p>С большой любовью и вниманием мы подходили к созданию всех героев игры, их истории, и, конечно же, иллюстрациям, которые вышли чудесными.</p>
            <p>Для того, чтобы «Монзания» стала по-настоящему качественным продуктом на рынке детских игр, было решено пригласить специалиста в области нейропсихологии и игротерапии, Елену Мазурову, которая не просто приняла участие в создании игры, но и стала её настоящим украшением.</p>
            <p>Играйте всей семьей, с друзьями или даже в одиночку, что я успешно
              и практиковала не один месяц ;)</p>
            <div>
              <span>Мишка Анастасия</span>
              <img src={AuthorSignImageSrc} alt="Мишка Анастасия"/>
            </div>
          </div>
        </FromAuthorWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
