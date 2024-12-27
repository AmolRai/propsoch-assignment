import { useEffect, useState } from "react";
import { propertyData } from "../../utils/data";
import PropertyCard from "../PropertyCard";

const Home = ({ state, dispatch }) => {
  const [endIndex, setEndIndex] = useState(10);

  const loadMoreItems = () => {
    setEndIndex((prev) => prev + 4);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <img src="/assets/icon.png" alt="app-icon" />
      <div className="property__container">
        {propertyData.slice(0, endIndex).map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            src={property.thumbnail}
            view={property.views}
            rating={property.rating}
            title={property.title}
            date={property.date}
            images={property.images}
            state={state}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
