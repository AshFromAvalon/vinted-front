import "./style.home.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      {data.map((offer) => {
        const { _id } = offer;
        return (
          <div key={_id}>
            <Link to={`/product/${_id}`}>{offer.product_name}</Link>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="Loading">Loading...</div>
  );
};

export default Home;
