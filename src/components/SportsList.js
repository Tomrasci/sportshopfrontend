import React, { useState, useEffect } from "react";
import getAll from "../services/sport.service";
import { Link } from "react-router-dom";
import { logout, getCurrentUser} from "../services/auth.service";
import "./SportsList.css";

const SportsList = () => {
  const [sports, setSports] = useState([]);
  const [currentSport, setCurrentSport] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.role===3);
    }
  }, []);


  useEffect(() => {
    retrieveSports();
  }, []);

  const retrieveSports = () => {
    getAll()
      .then(response => {
        setSports(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveSport = (sport, index) => {
    setCurrentSport(sport);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
    <div className="col-md-4">
    <h4>Sports List</h4>

    <ul className="list-group">
      {sports &&
        sports.map((sport, index) => (
          <li
            className={
              "list-group-item " + (index === currentIndex ? "active" : "")
            }
            onClick={() => setActiveSport(sport, index)}
            key={index}
          >
            {sport.name}
          </li>
        ))}
        </ul>
        </div>
        
        <div className="col-md-4">
        
        {currentSport && showAdminBoard ? (
          <div>
            <h4>Sport</h4>
            <div>
            <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentSport.name}
            </div>
            <Link
              to={"/sports/" + currentSport.id}
              className="badge badge-warning"
            >
              More Info
            </Link>
            <Link
              to={"/sports/" + currentSport.id + "/clubs"}
              className="badge badge-warning"
            >
              Sport clubs
            </Link>
            </div>) : null }
            </div>
            <div className="col-md-4">
            <img src="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SL1500_.jpg" alt="basketball"/>
            </div>
    </div> 
  ) 
}

export default SportsList;