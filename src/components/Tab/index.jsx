import styles from "./style.module.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const tabItems = [
  {
    id: "1",
    text: "Explore",
    icon: <FiSearch />,
    path: "/",
  },
  {
    id: "2",
    text: "Wishlists",
    icon: <AiOutlineHeart />,
    path: "/watchlist",
  },
  {
    id: "3",
    text: "Show map",
    icon: <GrLocation />,
    path: "/map",
  },
  {
    id: "4",
    text: "Log in",
    icon: <FaRegUser />,
    path: "/login",
  },
];

const Tab = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.tab}>
      {tabItems.map((item, ind) => (
        <div
          key={item.id}
          style={{
            color: pathname === item.path ? "#E57601" : "#757575",
            fontSize: "25px",
          }}
        >
          <Link to={item.path} className={styles.tab__items}>
            <div>{item.icon}</div>
            <span>{item.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tab;
