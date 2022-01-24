import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
//Redux
import { fetchInfo } from "../redux/reducers/info/Info";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const params = useParams();
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + params.id;
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.cardsInfo);
  useEffect(() => {
    dispatch(fetchInfo(url));
  }, [dispatch, url]);

  function renderComparation(obj) {
    
    switch (obj.type) {
      case "Spell Card":
        return <></>;
      case "Trap Card":
        return <></>;
      case "Link Monster":
        return (
          <>
            <p>Atk: {obj.atk}</p>
            <p>Archetype: {obj.archetype}</p>
            <p>Linkval {obj.linkval}</p>
            <p>Attribute: {obj.attribute}</p>
          </>
        );
      case "Pendulum Effect Monster":
        return (
          <>
            <p>Atk: {obj.atk}</p>
            <p>Def: {obj.def}</p>
            <p>Level: {obj.level}</p>
            <p>Scale: {obj.scale}</p>
            <p>Attribute: {obj.attribute}</p>
          </>
        );
      default:
        return (
          <>
            <p>Atk: {obj.atk}</p>
            <p>Def: {obj.def}</p>
            <p>Level: {obj.level}</p>
            <p>Attribute: {obj.attribute}</p>
          </>
        );
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        {list.map((item, index) => (
          <div
            key={index}
            className="card text-center"
            style={{ maxwidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                {item.card_images.map((itemM, indexM) => (
                  <img
                    key={indexM}
                    src={itemM.image_url}
                    className="img-fluid rounded-start"
                    alt=""
                  />
                ))}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p className="card-text">Type: {item.type}</p>
                  <p className="card-text">Description: {item.desc}</p>
                  <p className="card-text">Race: {item.race}</p>
                  {renderComparation(item)}
                  {item.card_prices.map((itemP, indexP) => (
                    <p key={indexP}>Price: {itemP.tcgplayer_price}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
