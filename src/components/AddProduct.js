import React, { useState} from "react";
import {create} from "../services/product.service";

const AddProduct = props => {
    const initialProductState = {
        id: null,
        name: "",
        price: null,
        description: "",
        club_id_FK : null
      };

  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    var data = {
      name : product.name,
      price : product.price,
      description: product.description,
      club_id_FK : product.club_id_FK
    };

    create(props.match.params.sid, props.match.params.cid, data)
      .then(response => {
        setProduct({
          id: response.data.id,
          name: response.data.name,
          price : response.data.price,
          description: response.data.description,
          club_id_FK: props.match.params.cid
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={product.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              value={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="description"
              className="form-control"
              id="description"
              required
              value={product.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <button onClick={saveProduct} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;