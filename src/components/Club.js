import React, { useState, useEffect} from "react";
import {get, update, remove} from "../services/club.service";

const Club = props => {
  const initialClubState = {
    id: null,
    name: "",
    budget: null,
    director: "",
    sport_id_FK : null
  };


  const [currentClub, setCurrentClub] = useState(initialClubState);
  const [message, setMessage] = useState("");

  const getClub = (sid, id) => {
    get(sid, id)
      .then(response => {
        setCurrentClub(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getClub(props.match.params.sid, props.match.params.id);
  }, [props.match.params.sid, props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentClub({ ...currentClub, [name]: value });
  };

  const updateClub = () => {
   update(currentClub.sport_id_FK, currentClub.id, currentClub)
      .then(response => {
        console.log(response.data);
        setMessage("The club was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteClub = () => {
    remove(currentClub.sport_id_FK,currentClub.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/sports/" + currentClub.sport_id_FK + "/clubs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentClub ? (
        <div className="edit-form">
          <h4>Club</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentClub.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input
                type="text"
                className="form-control"
                id="director"
                name="director"
                value={currentClub.director}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                className="form-control"
                id="budget"
                name="budget"
                value={currentClub.budget}
                onChange={handleInputChange}
              />
            </div>

            
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteClub}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateClub}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Club...</p>
        </div>
      )}
    </div>
  );
};

export default Club;