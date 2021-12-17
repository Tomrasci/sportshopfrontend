import React, { useState, useEffect} from "react";
import {get, update, remove} from "../services/product.service";

const Product = props => {
  const initialProductState = {
    id: null,
    name: "",
    price: null,
    description: "",
    club_id_FK : null
  };


  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = (sid, cid, id) => {
    get(sid, cid, id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.sid, props.match.params.cid, props.match.params.id);
  }, [props.match.params.sid, props.match.params.cid, props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateProduct = () => {
   update(props.match.params.sid, currentProduct.club_id_FK, currentProduct.id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("The product was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    remove(props.match.params.sid, currentProduct.club_id_FK,currentProduct.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/sports/" + props.match.params.sid + "/clubs/" + currentProduct.club_id_FK + "/products");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentProduct.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={currentProduct.price}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
              />
            </div>

            
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Product...</p>
        </div>
      )}
    </div>
  );
};

export default Product;