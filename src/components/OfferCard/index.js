import "./style.offercard.scss";

import Avatar from "../Avatar/index";

const OfferCard = ({ data }) => {
  return (
    <div className="offer-card-container">
      <div className="offer-card-owner">
        <Avatar
          imageUrl={
            data.owner.account.avatar
              ? data.owner.account.avatar.secure_url
              : null
          }
        />
        <span className="offer-card-owner-username">
          {data.owner.account.username}
        </span>
      </div>
      <div className="offer-card-cover">
        <img
          src={data.product_image.secure_url}
          alt=""
          className="offer-card-cover-image"
        />
      </div>
      <div className="offer-card-infos">
        <span className="offer-card-infos-price">{data.product_price} €</span>
        <span className="offer-card-infos-title">{data.product_name}</span>
      </div>
    </div>
  );
};

export default OfferCard;
