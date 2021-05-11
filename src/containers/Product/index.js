import "./style.product.scss";

// Dependencies
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Avatar from "../../components/Avatar/index";
import Slideshow from "../../components/Slideshow/index";

const Product = ({ userToken }) => {
  // States
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // retreive id from query ur params
  const { id } = useParams();

  const history = useHistory();

  // End points
  const myApi = "https://react-vinted-back.herokuapp.com/offer/";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/offer/";

  // Call server to receive offer
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(`${ReacteurApi}${id}`);
        console.log(response.data);
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOffer();
  }, [id]);

  const AddToCheckout = () => {
    userToken
      ? history.push("/payment/", {
          title: offer.product_name,
          price: offer.product_price,
          description: offer.product_description,
          offerId: offer._id,
        })
      : history.push("/signin/", {
          fromProductCta: true,
          title: offer.product_name,
          price: offer.product_price,
          description: offer.product_description,
          offerId: offer._id,
        });
  };

  return !isLoading ? (
    <div className="site-wrap">
      <div className="bckg-product">
        <div className="product-container">
          <div className="product-image-container">
            <div className="product-image">
              {offer.product_pictures.length <= 1 ? (
                <img src={offer.product_image.secure_url} alt="" />
              ) : (
                <Slideshow images={offer.product_pictures} />
              )}
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
                imageUrl={
                  offer.owner.account.avatar
                    ? offer.owner.account.avatar.secure_url
                    : null
                }
                size="medium"
              />
              <span className="product-infos-owner-username">
                {offer.owner.account.username}
              </span>
            </div>

            <div className="product-cta" onClick={AddToCheckout}>
              Acheter
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default Product;
