import "./style.product.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const axios = require("axios");

const Product = () => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const myApi = "https://react-vinted-back.herokuapp.com/offer/";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/offer/";

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(`${ReacteurApi}${id}`);
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOffer();
  }, [id]);

  return !isLoading ? (
    <div>
      <span>{offer.product_name}</span>
      <br />
      <span>{offer.product_description}</span>
      <br />
      <span>{offer.product_price}</span>
      <br />
      <div>
        <img src={offer.product_image.secure_url} alt="" />
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default Product;
