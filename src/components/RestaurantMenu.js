import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //Creating Custom Hooks
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// const [resInfo, setResInfo] = useState(null);
// const { resID } = useParams();
// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(MENU_API + resID);
//   const json = await data.json();
//   setResInfo(json?.data);
// };
