import "./style.home.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import OfferCard from "../../components/OfferCard/index";

const axios = require("axios");

// COMPONENT

const Home = ({ search, sortPrice, minVal, maxVal }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const myApi = "https://react-vinted-back.herokuapp.com/offers";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/offers";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${ReacteurApi}?title=${search}&sort=${sortPrice}&priceMin=${minVal}&priceMax=${maxVal}`
        );
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, sortPrice, minVal, maxVal]);

  return !isLoading ? (
    <div className="site-wrap">
      <Header />
      <div className="offers-container">
        <div className="offers-container-wrap">
          {data.map((offer, index) => {
            return (
              <Link
                to={`/product/${offer._id}`}
                className="offer-card"
                key={index}
              >
                <OfferCard data={offer} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="Loading">Loading...</div>
  );
};

export default Home;
