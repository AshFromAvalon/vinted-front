import Slider from "../../components/Slider";
import Slideshow from "../../components/Slideshow/index";
import "./style.test.scss";

const Test = () => {
  const images = [
    {
      secure_url:
        "https://res.cloudinary.com/lereacteur/image/upload/v1610363131/api/vinted/offers/5ffc30cd068f67f73652e9dd/n8wbxh7j4vwem9jf0hx2.jpg",
    },
    {
      secure_url:
        "https://res.cloudinary.com/lereacteur/image/upload/v1610363132/api/vinted/offers/5ffc30cd068f67f73652e9dd/we3ypxsxtckz3c4pjtta.jpg",
    },
    {
      secure_url:
        "https://res.cloudinary.com/lereacteur/image/upload/v1610363134/api/vinted/offers/5ffc30cd068f67f73652e9dd/cgpk1mcddes14odundsl.jpg",
    },
    {
      secure_url:
        "http://res.cloudinary.com/lereacteur/image/upload/v1610363135/api/vinted/offers/5ffc30cd068f67f73652e9dd/fdqi1jmuorx336bqum7n.jpg",
    },
    {
      secure_url:
        "https://res.cloudinary.com/lereacteur/image/upload/v1610363137/api/vinted/offers/5ffc30cd068f67f73652e9dd/rlzbwh8vnnfuzsaykn07.jpg",
    },
  ];
  return (
    <div className="site-wrap">
      <div className="container">
        <Slideshow images={images} />
      </div>
    </div>
  );
};

export default Test;
