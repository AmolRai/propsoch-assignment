import { useParams } from "react-router-dom";
import { propertyData } from "../../utils/data";
import styles from "./style.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import CustomGoogleMap from "../CustomGoogleMap";

const PropertyDetail = () => {
  const [amenitiesClick, setamentiiesClick] = useState({
    house: true,
    apartment: false,
  });
  const { id } = useParams();
  const property = propertyData.find((item) => item.id === id);

  return (
    <div className={styles.root__container}>
      <img src="/assets/icon.png" alt="random" />
      <div className={styles.detail__container}>
        <img src={property.thumbnail} alt="property-img" />
        <span className={styles.most__liked}>Most Liked</span>

        <div className={styles.detail__content__container}>
          <div className={styles.detail__content}>
            <div className={styles.detail__content__left}>
              <p>{property.title}</p>
              <div className={styles.location}>
                <FaLocationDot color="#252b5c" fontSize={16} />
                <span>{property.address}</span>
              </div>
            </div>
            <div className={styles.detail__content__right}>
              <p>{property.price}</p>
              <span>EMI Available</span>
            </div>
          </div>

          <div className={styles.detail__description}>
            <p>Location</p>
            <div className={styles.primary__location}>
              <div className={styles.location__icon}>
                <GrLocation fontSize={20} />
              </div>
              <span>
                Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa
                Tengah 50277
              </span>
            </div>
          </div>
          <CustomGoogleMap lat={property.lat} lng={property.lng} />
          <div className={styles.location__details}>
            <span>2 Hospital</span>
            <span>4 Gas stations</span>
            <span>2 Schools</span>
          </div>

          <div className={styles.property__amenities}>
            <p>Property Ammenties</p>
            <div>
              <span
                className={styles.amenities__style}
                onClick={() => {
                  setamentiiesClick({
                    house: !amenitiesClick.house,
                    apartment: false,
                  });
                }}
                style={{
                  backgroundColor: amenitiesClick.house ? "#234F68" : "#F5F4F8",
                  color: amenitiesClick.house ? "white" : "#252B5C",
                }}
              >
                House
              </span>
              <span
                onClick={() => {
                  setamentiiesClick({
                    apartment: !amenitiesClick.apartment,
                    house: false,
                  });
                }}
                className={styles.amenities__style}
                style={{
                  marginLeft: "1rem",
                  backgroundColor: amenitiesClick.apartment
                    ? "#234f68"
                    : "#F5F4F8",
                  color: amenitiesClick.apartment ? "white" : "#252B5C",
                }}
              >
                Apartment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
