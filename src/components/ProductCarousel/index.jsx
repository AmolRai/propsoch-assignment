import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductCarousel = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 800, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      touchRatio={2}
      simulateTouch={true}
      threshold={30}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div style={{ textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h3>{product.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
