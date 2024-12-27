import { useReducer } from "react";
import { watchlistReducer } from "./reducers/watchlistReducer";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tab from "./components/Tab";
import PropertyDetail from "./components/PropertyDetail";
import CustomGoogleMap from "./components/CustomGoogleMap";

const App = () => {
  const [state, dispatch] = useReducer(watchlistReducer, { watchlist: [] });

  return (
    <Router>
      <Tab />
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route
          path="/watchlist"
          element={<Watchlist state={state} dispatch={dispatch} />}
        />
        <Route path="/detail/:id" element={<PropertyDetail />} />
        <Route
          path="/map"
          element={<CustomGoogleMap lat={19.075983} lng={72.877655} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
