import "./style.product.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Avatar from "../../components/Avatar/index";

const axios = require("axios");

// COMPONENT

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
    <div className="site-wrap">
      <div className="bckg">
        <div className="product-container">
          <div className="product-image-container">
            <div className="product-image">
              <img src={offer.product_image.secure_url} alt="" />
            </div>
          </div>
          <div className="product-infos-container">
            <div className="product-infos-price">
              {offer.product_price.toFixed(2).replace(".", ",")} €
            </div>
            <div className="product-infos-details">
              <div className="product-infos-details-keys">
                {offer.product_details.map((detail, index) => {
                  return (
                    <span className="product-infos-details-key" key={index}>
                      {Object.keys(detail)[0]}
                    </span>
                  );
                })}
              </div>

              <div className="product-infos-details-values">
                {offer.product_details.map((detail, index) => {
                  return (
                    <span className="product-infos-details-value" key={index}>
                      {detail[Object.keys(detail)[0]]}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="serpartor"></div>
            <div className="product-infos-description">
              <span className="product-infos-title">{offer.product_name}</span>
              <span className="product-infos-description">
                {offer.product_description}
              </span>
            </div>
            <div className="product-infos-owner">
              <Avatar
                imageUrl={offer.owner.account.avatar.secure_url}
                size="medium"
              />
              <span className="product-infos-owner-username">
                {offer.owner.account.username}
              </span>
            </div>
            <div className="product-cta">Acheter</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default Product;
