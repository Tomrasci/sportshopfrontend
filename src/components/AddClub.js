import React, { useState} from "react";
import {create} from "../services/club.service";

const AddClub = props => {
    const initialClubState = {
        id: null,
        name: "",
        budget: null,
        director: "",
        sport_id_FK : null
      };

  const [club, setClub] = useState(initialClubState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClub({ ...club, [name]: value });
  };

  const saveClub = () => {
    var data = {
      name : club.name,
      budget : club.budget,
      director: club.director,
      sport_id_FK : club.sport_id_FK
    };

    create(props.match.params.id, data)
      .then(response => {
        setClub({
          id: response.data.id,
          name: response.data.name,
          director : response.data.director,
          budget: response.data.budget,
          sport_id_FK: props.match.params.id
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newClub = () => {
    setClub(initialClubState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newClub}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={club.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Director</label>
            <input
              type="text"
              className="form-control"
              id="director"
              required
              value={club.director}
              onChange={handleInputChange}
              name="director"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Budget</label>
            <input
              type="number"
              className="form-control"
              id="budget"
              required
              value={club.budget}
              onChange={handleInputChange}
              name="budget"
            />
          </div>
          <button onClick={saveClub} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddClub;