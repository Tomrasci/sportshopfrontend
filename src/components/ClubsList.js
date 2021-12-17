import React, { useState, useEffect } from "react";
import getAll from "../services/club.service";
import { Link } from "react-router-dom";

const ClubsList = (props) => {
  const [clubs, setClubs] = useState([]);
  const [currentClub, setCurrentClub] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);


  useEffect(() => {
    retrieveClubs(props.match.params.id);
  }, [props.match.params.id]);

  const retrieveClubs = id => {
    getAll(id)
      .then(response => {
        setClubs(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveClub = (club, index) => {
    setCurrentClub(club);
    setCurrentIndex(index);
  };

  return ( 
      <div>
    <div className="list row">
    <div className="col-md-6">
    <h4>Clubs List</h4>

    <ul className="list-group">
      {clubs &&
        clubs.map((club, index) => (
          <li
            className={
              "list-group-item " + (index === currentIndex ? "active" : "")
            }
            onClick={() => setActiveClub(club, index)}
            key={index}
          >
            {club.name}
          </li>
        ))}
        </ul>
        </div>
        
        <div className="col-md-6">
        
        {currentClub ? (
          <div>
            <h4>Club</h4>
            <div>
            <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentClub.name}
            </div>
            <Link
              to={"/sports/" + currentClub.sport_id_FK + "/clubs/" + currentClub.id}
              className="badge badge-warning"
            >
              More Info
            </Link>
            <Link
              to={"/sports/" + currentClub.sport_id_FK + "/clubs/" + currentClub.id + "/products"}
              className="badge badge-warning"
            >
              Club products
            </Link>
            </div>) : null }
            </div>
    </div>
    <div className="col-md-6">
    <Link to={"/sports/" + props.match.params.id + "/addClub"}
    
              //className="badge badge-warning"
            >
             <button type="button" className="btn btn-success" Style="float: right;">
              Add Club
              </button>
            </Link>
            </div>
    </div>
  ) 
}

export default ClubsList;

