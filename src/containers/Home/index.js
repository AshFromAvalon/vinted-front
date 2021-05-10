import "./style.home.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import OfferCard from "../../components/OfferCard/index";

const axios = require("axios");

// COMPONENT

const Home = ({ search, sortPrice, minVal, maxVal, userToken, setPublish }) => {
  // States
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Endpoints
  const myApi = "https://react-vinted-back.herokuapp.com/offers";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/offers";

  // Fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${ReacteurApi}?limit=${10}&page=${page}&title=${search}&sort=${sortPrice}&priceMin=${minVal}&priceMax=${maxVal}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, sortPrice, minVal, maxVal, page]);

  // Calculate pagination
  const numOfPages = Math.floor(data.count / 5);
  const pages = [];
  let countPage = 1;
  while (countPage <= numOfPages) {
    pages.push(0);
    countPage++;
  }

  // Render component
  return !isLoading ? (
    <div className="site-wrap">
      <Header userToken={userToken} setPublish={setPublish} />
      <div className="offers-container">
        <div className="offers-container-wrap">
          {/* Generate offer cards */}
          {data.offers.map((offer, index) => {
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
      <div className="pages-container">
        <div className="offers-pages">
          {/* Generates pagination */}
          <div className="pages">
            {pages.map((page, index) => {
              return (
                <span
                  key={index}
                  className="offers-pages-page"
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>
          <span className="offers-pages-text">page {page} </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="Loading">Loading...</div>
  );
};

export default Home;
