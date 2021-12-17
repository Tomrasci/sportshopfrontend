import React, { useState, useEffect } from "react";
import getAll from "../services/product.service";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);


  useEffect(() => {
    retrieveproducts(props.match.params.sid, props.match.params.cid);
  }, [props.match.params.sid, props.match.params.cid]);

  const retrieveproducts = (sid, cid) => {
    getAll(sid, cid)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  return ( 
      <div>
    <div className="list row">
    <div className="col-md-6">
    <h4>Products List</h4>

    <ul className="list-group">
      {products &&
        products.map((product, index) => (
          <li
            className={
              "list-group-item " + (index === currentIndex ? "active" : "")
            }
            onClick={() => setActiveProduct(product, index)}
            key={index}
          >
            {product.name}
          </li>
        ))}
        </ul>
        </div>
        
        <div className="col-md-6">
        
        {currentProduct ? (
          <div>
            <h4>Product</h4>
            <div>
            <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentProduct.name}
            </div>
            <Link
              to={"/sports/" + props.match.params.sid + "/clubs/" + currentProduct.club_id_FK + "/products/" + currentProduct.id}
              className="badge badge-warning"
            >
              More Info
            </Link>
            </div>) : null }
            </div>
    </div>
    <div className="col-md-6">
    <Link to={"/sports/" + props.match.params.sid + "/clubs/" + props.match.params.cid + "/addProduct" }
    
              //className="badge badge-warning"
            >
             <button type="button" className="btn btn-success" Style="float: right;">
              Add Product
              </button>
            </Link>
            </div>
    </div>
  ) 
}

export default ProductsList;

