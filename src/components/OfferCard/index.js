import "./style.offercard.scss";

const OfferCard = ({ data }) => {
  return (
    <div>
      <div className="offer-card-owner">
        <img
          className="offer-card-owner-avatar"
          src={data.owner.account.avatar.secure_url}
          alt=""
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
        <span>{data.product_price} €</span>
        <span>{data.product_name}</span>
      </div>
    </div>
  );
};

export default OfferCard;
