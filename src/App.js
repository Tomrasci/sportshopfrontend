import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { logout, getCurrentUser} from "./services/auth.service";
import Footer from "./components/Footer";
import Modal from "react-bootstrap/Modal";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SportsList from "./components/SportsList";
import AddSport from "./components/AddSport";
import Sport from "./components/Sport";
import ClubsList from "./components/ClubsList";
import Club from "./components/Club";
import AddClub from "./components/AddClub";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };



  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.role===3);
    }
  }, []);

  const logOut = () => {
    logout();
    window.location.replace("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="navbar-brand">
             SportShopWeb
        </Link>
        <div className="navbar-nav mr-auto collapse navbar-collapse" id="navbarSupportedContent">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/sports"} className="nav-link">
              Sports
            </Link>
          </li>

          {showAdminBoard && (<li className="nav-item">
            <Link to={"/sports/add"} className="nav-link">
              Add Sport
            </Link>
          </li>)}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={showModal}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}

      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sports" component={SportsList} />
          <Route exact path="/sports/add" component={AddSport} />
          <Route exact path="/sports/:id" component={Sport} />
          <Route exact path="/sports/:id/clubs" component={ClubsList} />
          <Route exact path="/sports/:sid/clubs/:id" component={Club} />
          <Route exact path="/sports/:id/addClub" component={AddClub} />
          <Route exact path="/sports/:sid/clubs/:cid/products" component={ProductsList} />
          <Route exact path="/sports/:sid/clubs/:cid/products/:id" component={Product} />
          <Route exact path="/sports/:sid/clubs/:cid/addProduct" component={AddProduct} />
        </Switch>
      </div>
      <form method="POST" action="./login">
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button type="submit" onClick={logOut}>Logout</button>
        </Modal.Footer>
      </Modal>
      </form>
      <Footer />
    </div>
  );
};

export default App;