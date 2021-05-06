import "./style.home.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import OfferCard from "../../components/OfferCard/index";

const axios = require("axios");

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://react-vinted-back.herokuapp.com/offers"
        );
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return !isLoading ? (
    <div>
      <Header />
      <div className="offers-container">
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
  ) : (
    <div className="Loading">Loading...</div>
  );
};

export default Home;
