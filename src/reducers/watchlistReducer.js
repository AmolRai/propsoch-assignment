export const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (property) => property.id !== action.payload.id
        ),
      };
    default:
      break;
  }
};
