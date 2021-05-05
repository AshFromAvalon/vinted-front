import "./style.offer.scss";

const OfferCard = (data) => {
  console.log(data);
  return (
    <div>
      <div className="offer-card-owner">
        <img
          className="offer-card-owner-avatar"
          src={data.data.owner.account.avatar.secure_url}
          alt=""
        />
        <span className="offer-card-owner-username">
          {data.data.owner.account.username}
        </span>
      </div>
      <div className="offer-card-cover">
        <img src="#" alt="" className="offer-card-cover-image" />
      </div>
      <div className="offer-card-infos">
        <span>{data.data.product_price} €</span>
        <span>{data.data.product_name}</span>
      </div>
    </div>
  );
};

export default OfferCard;
