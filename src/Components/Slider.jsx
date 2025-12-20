import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import Snowfall from "react-snowfall";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Loading from "./Loading";
import Error from "./Error";
import snowflakeImage1 from "../assets/snowflake1.png";
import snowflakeImage2 from "../assets/snowflake2.png";
import snowflakeCorner1 from "../assets/snowflake_corner.png";
import snowflakeCorner2 from "../assets/snowflake_corner2.png";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snowflakeImages, setSnowflakeImages] = useState([]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const img1 = new Image();
    img1.src = snowflakeImage1;
    const img2 = new Image();
    img2.src = snowflakeImage2;
    setSnowflakeImages([img1, img2]);
  }, []);

  useEffect(() => {
    fetch("/slideImages.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (images.length === 0) return null;

  return (
    <div className="order-1 lg:order-2 relative">
      {snowflakeImages.length > 0 && (
        <Snowfall
          snowflakeCount={80}
          color="#ffffff"
          radius={[5, 20]}
          speed={[0.5, 1.5]}
          wind={[0.5, 2]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 50,
            pointerEvents: "none",
          }}
          images={snowflakeImages}
        />
      )}

      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={images.length > 2}
          centeredSlides
          slidesPerView={1}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          <img
            src={snowflakeCorner1}
            alt="corner decoration"
            className="absolute top-2 left-2 w-16 md:w-24 lg:w-32 z-20 pointer-events-none"
          />
          <img
            src={snowflakeCorner2}
            alt="corner decoration"
            className="absolute bottom-2 right-2 w-16 md:w-24 lg:w-32 z-20 pointer-events-none"
          />

          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute top-1/2 left-3 z-30 text-accent text-4xl cursor-pointer transform -translate-y-1/2"
        >
          <BiSolidLeftArrow />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-3 z-30 text-accent text-4xl cursor-pointer transform -translate-y-1/2"
        >
          <BiSolidRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Slider;
