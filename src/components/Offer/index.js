import "./style.offer.scss";

const Offer = (data) => {
  return (
    <div>
      <span>{data.product_name}</span>
      <span>{data.product_description}</span>
      <span>{data.product_price}</span>
      <br />
    </div>
  );
};

export default Offer;
