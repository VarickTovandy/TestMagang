import { useState } from "react";
import './ImageSliders.css'

const slideStyles = {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>  
      </div>
      <div style={slideStylesWidthBackground}>
        <div className="paragraph">
          <p>THIS IS A PLACE WHERE TECHNOLOGY &
          <br />CREATIVITY FUSED INTO DIGITAL CHEMISTRY</p>
        </div>
        <div className="dotsContainerStyles">
            {slides.map((slide, slideIndex) => (
            <div
                className="dotStyle"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
            >
                ●
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;