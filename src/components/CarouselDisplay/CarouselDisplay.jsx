import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import patternImages from '../../assets/images/index';
import StyledContainer from './CarouselDisplay.style';

export default function CarouselDisplay(props) {
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
