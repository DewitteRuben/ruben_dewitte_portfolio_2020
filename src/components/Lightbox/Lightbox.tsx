import React from "react";
import styled, { css } from "styled-components";
import { em, rem } from "polished";

export const LightboxThumbnail = styled.img`
  max-width: 300px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.border};

  &:hover {
    cursor: pointer;
  }
`;

interface ILightboxContainerProps {
  hide: boolean;
}
const LightboxBackdrop = styled.div<ILightboxContainerProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const LightboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

interface ILightboxFullProps {
  xOffset?: number;
  animate?: boolean;
}

const EnableLightboxTransition = css`
  transition: transform 0.4s ease-in-out;
`;

const LightboxFull = styled.img.attrs<ILightboxFullProps>(({ xOffset }) => ({
  style: { transform: `translateX(${xOffset}px)` },
}))<ILightboxFullProps>`
  max-width: 90%;
  max-height: 80%;

  user-select: none;
  backface-visibility: hidden;

  ${(props) => props.animate && EnableLightboxTransition}
`;

interface ILightboxProps {
  arrowLeft?: boolean;
  arrowRight?: boolean;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onClose?: () => void;
  src: string;
  thumb?: string;
  visible?: boolean;
  showThumb?: boolean;
}

const Arrow = css`
  position: absolute;
  color: ${(props) => props.theme.backgroundColor};
  font-size: ${rem(64)};
  user-select: none;
  width: ${em(20)};
  border-radius: 50%;
  z-index: 2;
  background-color: ${(props) => props.theme.text};

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    font-size: ${rem(32)};
  }
`;

const ArrowLeft = styled.span`
  ${Arrow}
  left: 2%;
`;

const ArrowRight = styled.span`
  ${Arrow}
  right: 2%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 50px;

  color: ${(props) => props.theme.backgroundColor};
  font-size: ${rem(64)};
  width: ${em(20)};
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};

  user-select: none;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    font-size: ${rem(32)};
  }
`;

const Lightbox: React.FC<ILightboxProps> = ({
  src,
  arrowLeft,
  arrowRight,
  onArrowLeft,
  onArrowRight,
  onClose,
  thumb,
  visible,
  showThumb = true,
}) => {
  const [hidden, setIsHidden] = React.useState(true);
  const [xOffset, setXOffset] = React.useState(0);
  const [animate, setAnimation] = React.useState(false);

  const imageRef = React.useRef<HTMLImageElement>(null);
  const startTouch = React.useRef<number>(0);

  const [swipeAction, setSwipeAction] = React.useState<{ action: "left" | "right" | "reset" }>();

  React.useEffect(() => {
    const swipe = swipeAction?.action;
    setAnimation(true);

    if (swipe === "left" && arrowRight && onArrowRight) {
      setTimeout(() => {
        onArrowRight();
      }, 500);
    }

    if (swipe === "right" && arrowLeft && onArrowLeft) {
      setTimeout(() => {
        onArrowLeft();
      }, 500);
    }

    if ((swipe == "left" && !arrowRight) || (swipe == "right" && !arrowLeft)) {
      setXOffset(0);
    }

    setTimeout(() => {
      setXOffset(0);
    }, 500);

    setSwipeAction(undefined);
  }, [arrowLeft, arrowRight, onArrowLeft, onArrowRight, swipeAction]);

  React.useEffect(() => {
    const handleTouchMove = (ev: TouchEvent) => {
      const x = ev.touches[0].clientX;
      setXOffset(x - startTouch?.current);
    };

    const handleTouchStart = (ev: TouchEvent) => {
      setAnimation(false);
      startTouch.current = ev.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (imageRef.current) {
        if (Math.abs(xOffset) > imageRef?.current.clientWidth / 3) {
          setSwipeAction({ action: xOffset < 0 ? "left" : "right" });
          const vw = document.documentElement.clientWidth;
          setXOffset(xOffset < 0 ? -vw : vw);
        } else {
          setSwipeAction({ action: "reset" });
          setXOffset(0);
        }
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startTouch, xOffset]);

  const handleOnClose = () => {
    if (onClose) {
      onClose();
    }
    setIsHidden(true);
  };

  const handleOnThumbnailClick = () => {
    setIsHidden(false);
  };

  React.useEffect(() => {
    setIsHidden(!visible);
  }, [visible]);

  return (
    <>
      {showThumb && <LightboxThumbnail src={thumb || src} onClick={handleOnThumbnailClick} />}
      <LightboxBackdrop hide={hidden}>
        <LightboxContainer>
          {arrowLeft && <ArrowLeft onClick={onArrowLeft}>&lt;</ArrowLeft>}
          <LightboxFull animate={animate} xOffset={xOffset} ref={imageRef} src={src} />
          {arrowRight && <ArrowRight onClick={onArrowRight}>&gt;</ArrowRight>}
          <CloseButton onClick={handleOnClose}>&times;</CloseButton>
        </LightboxContainer>
      </LightboxBackdrop>
    </>
  );
};

export default Lightbox;
