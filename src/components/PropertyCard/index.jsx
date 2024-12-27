import styles from "./style.module.css";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const PropertyCard = ({
  id,
  src,
  view,
  rating,
  title,
  date,
  images,
  state,
  dispatch,
}) => {
  const propertyRating = parseInt(rating);
  const ratingColor =
    propertyRating < 3 ? "#F32B2B" : propertyRating < 4 ? "#E57601" : "#278717";
  const isInWatchlist = state.watchlist.some((item) => item.id === id);
  const navigate = useNavigate();

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch({ type: "REMOVE", payload: { id } });
    } else {
      dispatch({
        type: "ADD",
        payload: { id, src, view, rating, title, date, images },
      });
    }
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <div className={styles.card__img}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="property" className={styles.card__image} />
            </SwiperSlide>
          ))}
        </Swiper>
        {id !== "2" ? (
          <span className={styles.most__liked}>Most Liked</span>
        ) : null}
        <img
          className={styles.watchlist}
          src={isInWatchlist ? "/assets/fill-heart.svg" : "/assets/heart.svg"}
          onClick={(e) => {
            e.stopPropagation();
            handleWatchlist();
          }}
          alt="watchlist"
        />
      </div>

      <div className={styles.card__content}>
        <div className={styles.card__info__container}>
          <div className={styles.card__info__views}>
            <FiEye />
            <p>{view}</p>
          </div>
          <div className={styles.card__info__rating}>
            <FaStar color={ratingColor} />
            <span style={{ color: ratingColor }}>{rating}</span>
          </div>
        </div>
        <div className={styles.property}>
          <span>{title}</span>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
