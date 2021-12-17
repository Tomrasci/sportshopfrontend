import React, { useState, useEffect } from "react";
import {get, update, remove} from "../services/sport.service";

const Sport = props => {
  const initialTutorialState = {
    id: null,
    name: "",
  };
  const [currentSport, setCurrentSport] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getSport = id => {
    get(id)
      .then(response => {
        setCurrentSport(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSport(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentSport({ ...currentSport, [name]: value });
  };

  const updateSport = () => {
   update(currentSport.id, currentSport)
      .then(response => {
        console.log(response.data);
        setMessage("The sport was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteSport = () => {
    remove(currentSport.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/sports");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentSport ? (
        <div className="edit-form">
          <h4>Sport</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentSport.name}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteSport}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateSport}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Sport...</p>
        </div>
      )}
    </div>
  );
};

export default Sport;