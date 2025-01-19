/* eslint-disable react/prop-types */
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "./MySlider.css";

const MySlider = ({
  sliders = [],
  isCenteredSlides = false,
  isHideButton = false,
}) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current?.slidePrev();
    }
  };

  const renderSlider = useCallback(() => {
    return sliders?.map((slider, index) => (
      <SwiperSlide key={index} virtualIndex={index}>
        {slider}
      </SwiperSlide>
    ));
  }, [sliders]);

  return (
    <div className="my-slider">
      {!isHideButton && (
        <button className="btn-slider btn-pre" onClick={handlePrev}>
          &lt;
        </button>
      )}
      <div className="slider-content">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={isCenteredSlides}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {renderSlider()}
        </Swiper>
      </div>
      {!isHideButton && (
        <button className="btn-slider btn-next" onClick={handleNext}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default MySlider;
