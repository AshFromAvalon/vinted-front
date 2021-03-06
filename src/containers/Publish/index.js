import "./style.publish.scss";

// Dependencies
import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Publish = ({ userToken }) => {
  // States
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState();
  const [data, setData] = useState();

  // End points
  const myApi = "https://react-vinted-back.herokuapp.com/offer/publish";
  const ReacteurApi =
    "https://lereacteur-vinted-api.herokuapp.com/offer/publish";

  // Call server to create an offer
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", Number(size));
      formData.append("color", color);
      formData.append("price", Number(price));

      const response = await axios.post(ReacteurApi, formData, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="site-wrap">
      <div className="bckg-publish">
        <div className="publish-container">
          <h2>Publier une offre</h2>
          <form
            className="publish-form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="publish-form-content">
              <div className="border">
                <label htmlFor="picture" className="publish-form-label-upload">
                  + ajouter un fichier
                </label>
              </div>
              <input
                type="file"
                className="publish-form-input"
                id="picture"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </div>

            <div className="publish-form-content">
              <div className="publish-form-content-col-l">
                <label htmlFor="title" className="publish-form-label">
                  Titre
                </label>
                <label htmlFor="description" className="publish-form-label">
                  Description
                </label>
              </div>
              <div className="publish-form-content-col-r">
                <input
                  placeholder="ex: Veste en jean"
                  type="text"
                  className="publish-form-input"
                  id="title"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <input
                  placeholder="ex: Veste en jean Levi's, peu port??e..."
                  type="text"
                  className="publish-form-input"
                  id="description"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>

            <div className="publish-form-content">
              <div className="publish-form-content-col-l">
                <label htmlFor="condition" className="publish-form-label">
                  Etat
                </label>
                <label htmlFor="city" className="publish-form-label">
                  Ville
                </label>
                <label htmlFor="brand" className="publish-form-label">
                  Marque
                </label>
                <label htmlFor="size" className="publish-form-label">
                  Taille
                </label>
                <label htmlFor="color" className="publish-form-label">
                  Couleur
                </label>
              </div>

              <div className="publish-form-content-col-r">
                <input
                  placeholder="ex: Bon"
                  type="text"
                  className="publish-form-input"
                  id="condition"
                  onChange={(event) => setCondition(event.target.value)}
                />
                <input
                  placeholder="ex: Paris"
                  type="text"
                  className="publish-form-input"
                  id="city"
                  onChange={(event) => setCity(event.target.value)}
                />
                <input
                  placeholder="ex: Levi's"
                  type="text"
                  className="publish-form-input"
                  id="brand"
                  onChange={(event) => setBrand(event.target.value)}
                />
                <input
                  placeholder="ex: 44"
                  type="text"
                  className="publish-form-input"
                  id="size"
                  onChange={(event) => setSize(event.target.value)}
                />
                <input
                  placeholder="ex: Bleu"
                  type="text"
                  className="publish-form-input"
                  id="color"
                  onChange={(event) => setColor(event.target.value)}
                />
              </div>
            </div>

            <div className="publish-form-content">
              <div className="publish-form-content-col-l">
                <label htmlFor="price" className="publish-form-label">
                  Prix
                </label>
              </div>

              <div className="publish-form-content-col-r">
                <input
                  placeholder="0.00 ???"
                  type="number"
                  className="publish-form-input"
                  id="price"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Publier"
              className="publish-form-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Publish;
