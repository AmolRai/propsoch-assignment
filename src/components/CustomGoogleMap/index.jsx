import styles from "./style.module.css";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const CustomGoogleMap = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDepJH89-FyAoWlW74dcPgQlApvIZJhpmQ",
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <>
      <GoogleMap
        mapContainerClassName={styles.map__container}
        center={{ lat, lng }}
        zoom={10}
        options={{
          gestureHandling: "greedy",
        }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
      <div className={styles.view__map}>View on Map</div>
    </>
  );
};

export default CustomGoogleMap;
