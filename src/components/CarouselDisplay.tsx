import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import patternImages from "../assets/images/index";
import style from 'styled-components';

const StyledContainer = style.div`
  display: none;
  
  @media(min-width: 1254px) {
    display: block;
    margin: 3em auto 0 auto;
  }
`;


export default function CarouselDisplay() {
  return (
    <StyledContainer>
      <Carousel
        autoPlay
        width="260px"
        interval={2000}
        transitionTime={1000}
        dynamicHeight
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={100}
      >
        {patternImages.map((img, index) => {
          const i = index;

          return (
            <div key={i}>
              <img
                src={patternImages[index]}
                alt={`Spirograph pattern number ${index + 1}`}
              />
            </div>
          );
        })}
      </Carousel>
    </StyledContainer>
  );
}
