import React, { useEffect } from "react";
//Redux
import { fetchAllCards } from "../redux/reducers/cards";
import { useDispatch, useSelector } from "react-redux";
//Pages
import { NavLink } from "react-router-dom";
//Components
import Filter from "../components/Filter";

const Cards = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.cards);
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=30&offset=0&view=List";
  useEffect(() => {
    dispatch(fetchAllCards(url));
  }, [dispatch, url]);

  return (
    <>
      <div className="container-xxl justify-content-center">
        <Filter />
        <div className="row d-flex p-2">
          {list.map((item, index) => (
            <div key={index} className="col py-2 ">
              <div
                className="card h-100 text-center mx-auto"
                style={{ minWidth: "100px", maxWidth: "236px" }}
              >
                {item.card_images.map((itemM, indexM) => (
                  <img key={indexM} src={itemM.image_url} alt="" />
                ))}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p>Type: {item.type}</p>
                  <p>Description: {item.desc}</p>
                  {item.card_prices.map((itemP, indexP) => (
                    <p key={indexP}>Price: {itemP.tcgplayer_price}</p>
                  ))}
                  <NavLink
                    type="btn"
                    className="btn btn-success btn-lg mt-auto"
                    to={"/carta/" + item.id}
                  >
                    Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Filter />
      </div>
    </>
  );
};

export default Cards;
