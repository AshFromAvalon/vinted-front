import "./style.home.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Offer from "../../components/Offer/index";

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
        console.log(response.data);
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
      <Navbar />
      <Header />
      <div className="offers">
        {data.map((offer, index) => {
          return <Offer key={index} data={offer} />;
        })}
      </div>
    </div>
  ) : (
    <div className="Loading">Loading...</div>
  );
};

export default Home;
