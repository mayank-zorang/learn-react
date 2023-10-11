const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const MenuList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg m-auto rounded-lg">
                Add+
              </button>
            </div>

            <img
              src={
                item.card.info.imageId
                  ? IMG_URL + item.card.info.imageId
                  : "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg"
              }
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
