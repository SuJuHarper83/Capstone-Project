import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const AddExerciseForm = (props) => {
  const [user, token] = useAuth();
  const [title, setTitle] = useState("");
  const [input_d, setD] = useState("");
  const [input_e, setE] = useState("");
  const [newExercise, setExercise] = useState("");

  useEffect(() => {
    addNewExercise();
  }, []);

  async function addNewExercise() {
    try {
      let newExercise = {
        title: title,
        input_d: input_d,
        input_e: input_e,
      };

      let response = await axios.post(
        `http://127.0.0.1:8000/api/capstone/getExercises/`,
        newExercise,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      setExercise(response.data);
    } catch (error) {
      console.log(error.response.data);
      addNewExercise();
      props.newExerciseProperty(newExercise);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewExercise();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-entry-table">
        <div className="form-group">
          <p>
            <label>Title of Exercise </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </p>
          <p>
            <label>Description </label>
            <input
              type="text"
              className="form-control"
              value={input_d}
              onChange={(event) => setD(event.target.value)}
            />
          </p>
          <p>
            <label>Examples </label>
            <input
              type="text"
              className="form-control"
              value={input_e}
              onChange={(event) => setE(event.target.value)}
            />
          </p>
          <p>
            <input type="submit" className="button" />
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddExerciseForm;
