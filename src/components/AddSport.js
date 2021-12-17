import React, { useState } from "react";
import {create} from "../services/sport.service";

const AddSport = () => {
  const initialSportState = {
    id: null,
    name: "",
  };
  const [sport, setSport] = useState(initialSportState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSport({ ...sport, [name]: value });
  };

  const saveSport = () => {
    var data = {
      name : sport.name
    };

    create(data)
      .then(response => {
        setSport({
          id: response.data.id,
          name: response.data.name,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newSport = () => {
    setSport(initialSportState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newSport}>
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
              value={sport.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <button onClick={saveSport} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddSport;