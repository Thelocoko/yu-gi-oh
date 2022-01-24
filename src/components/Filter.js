import React, { useState } from "react";
//Redux
import { fetchAllCards } from "../redux/reducers/cards";
import { useDispatch } from "react-redux";

function Filter() {
  const [initial, setInitial] = useState(30);
  const [initialOrder, setInitialOrder] = useState("name");
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const handleUpdate = (num, initialOrder) => {
    var url =
      "https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=" +
      num +
      "&offset=0&view=List&sort=" +
      initialOrder;
    dispatch(fetchAllCards(url));
    setPage(0);
  };
  const handleNext = () => {
    var temp = page + initial;
    setPage(temp);
    var urlNext =
      "https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=" +
      initial +
      "&offset=" +
      temp +
      "&view=List&sort=" +
      initialOrder;
    dispatch(fetchAllCards(urlNext));
  };
  const handlePrevius = () => {
    var temp = page - initial
    setPage(temp);
    var urlPrevius =
      "https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=" +
      initial +
      "&offset=" +
      temp +
      "&view=List&sort=" +
      initialOrder;
    dispatch(fetchAllCards(urlPrevius));
  };

  return (
    <div className="row align-items-center">
      <div className="col mt-3 text-end">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="!#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Order by
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("atk");
                  handleUpdate(initial, "atk");
                }}
              >
                ATK
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("def");
                  handleUpdate(initial, "def");
                }}
              >
                DEF
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("level");
                  handleUpdate(initial, "level");
                }}
              >
                Level
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("name");
                  handleUpdate(initial, "name");
                }}
              >
                Name
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("price");
                  handleUpdate(initial, "price");
                }}
              >
                Price
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("tcg_date");
                  handleUpdate(initial, "tcg_date");
                }}
              >
                Date
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitialOrder("type");
                  handleUpdate(initial, "type");
                }}
              >
                Type
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col mt-3 text-left">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="!#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cards
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitial(10);
                  handleUpdate(10, initialOrder);
                }}
              >
                10
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitial(20);
                  handleUpdate(20, initialOrder);
                }}
              >
                20
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitial(30);
                  handleUpdate(30, initialOrder);
                }}
              >
                30
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitial(40);
                  handleUpdate(40, initialOrder);
                }}
              >
                40
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setInitial(50);
                  handleUpdate(50, initialOrder);
                }}
              >
                50
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col align-self-center">
          <nav className="my-5">
            <ul className="pagination justify-content-center">
              {page ? (
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePrevius()}>
                    Previus
                  </button>
                </li>
              ) : null}

              <li className="page-item">
                <button className="page-link" onClick={() => handleNext()}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Filter;
