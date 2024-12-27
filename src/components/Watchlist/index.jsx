import PropertyCard from "../PropertyCard";

const Watchlist = ({ state, dispatch }) => {
  const { watchlist } = state;

  return (
    <div className="property__container">
      {watchlist.length === 0 ? (
        <h2 style={{ marginTop: "5rem" }}>Watchlist is empty</h2>
      ) : (
        watchlist.map((item) => (
          <PropertyCard
            key={item.id}
            {...item}
            state={state}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
};

export default Watchlist;
