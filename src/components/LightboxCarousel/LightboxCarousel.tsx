import React from "react";
import Lightbox, { LightboxThumbnail } from "../Lightbox/Lightbox";
import styled from "styled-components";
import { em } from "polished";

interface ILightboxCarouselProps {
  images: string[];
}

const LightboxCarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${em(250)}, 1fr));
  grid-gap: ${em(10)};
`;

const LightboxCarousel: React.FC<ILightboxCarouselProps> = ({ images }) => {
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

  React.useEffect(() => {
    const handleKeyPress = (ev: KeyboardEvent) => {
      const key = ev.key;
      if (key === "Escape" && isVisible) {
        return setVisibility(false);
      }
      if (key === "ArrowLeft") {
        return goLeft();
      }
      if (key === "ArrowRight") {
        return goRight();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [goLeft, goRight, isVisible]);

  const onThumbClick = (index: number) => () => {
    setIndex(index);
    setVisibility(true);
  };

  const onLightboxClose = () => {
    setVisibility(false);
  };

  return (
    <LightboxCarouselContainer>
      {images.map((src: string, index: number) => (
        <LightboxThumbnail onClick={onThumbClick(index)} key={src} src={src} />
      ))}
      <Lightbox
        onClose={onLightboxClose}
        onArrowLeft={goLeft}
        onArrowRight={goRight}
        src={images[currentIndex]}
        arrowLeft={hasLeftArrow}
        arrowRight={hasRightArrow}
        visible={isVisible}
        showThumb={false}
      />
    </LightboxCarouselContainer>
  );
};

export default LightboxCarousel;
