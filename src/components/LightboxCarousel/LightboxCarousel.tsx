import React from "react";
import Lightbox, { LightboxThumbnail } from "../Lightbox/Lightbox";
import styled from "styled-components";
import { em } from "polished";

export interface ILightboxImage {
  src: string;
  width?: number;
}

interface ILightboxCarouselProps {
  images: (string | ILightboxImage)[];
  width?: number;
}

const LightboxCarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${em(300)}, 1fr));
  justify-items: center;
  grid-gap: ${em(10)};
`;

const LightboxCarousel: React.FC<ILightboxCarouselProps> = ({ images, width: allImagesWidth }) => {
  const [currentIndex, setIndex] = React.useState(0);
  const [isVisible, setVisibility] = React.useState(false);

  const hasLeftArrow = currentIndex - 1 >= 0;
  const hasRightArrow = currentIndex + 1 <= images.length - 1;

  const goLeft = React.useCallback(() => {
    if (hasLeftArrow) {
      setIndex((cur) => cur - 1);
    }
  }, [hasLeftArrow]);

  const goRight = React.useCallback(() => {
    if (hasRightArrow) {
      setIndex((cur) => cur + 1);
    }
  }, [hasRightArrow]);

  const onThumbClick = (index: number) => () => {
    setIndex(index);
    setVisibility(true);
  };

  const onLightboxClose = () => {
    setVisibility(false);
  };

  const getCurrentImage = () => {
    const currentImage = images[currentIndex];
    return typeof currentImage === "string" ? currentImage : currentImage.src;
  };

  return (
    <LightboxCarouselContainer>
      {images.map((item: string | ILightboxImage, index: number) => {
        const src = typeof item === "string" ? item : item.src;
        const width = typeof item === "string" ? allImagesWidth : item.width || allImagesWidth;
        return <LightboxThumbnail width={width || allImagesWidth} onClick={onThumbClick(index)} key={src} src={src} />;
      })}
      <Lightbox
        onClose={onLightboxClose}
        onArrowLeft={goLeft}
        onArrowRight={goRight}
        src={getCurrentImage()}
        arrowLeft={hasLeftArrow}
        arrowRight={hasRightArrow}
        visible={isVisible}
        showThumb={false}
      />
    </LightboxCarouselContainer>
  );
};

export default LightboxCarousel;
