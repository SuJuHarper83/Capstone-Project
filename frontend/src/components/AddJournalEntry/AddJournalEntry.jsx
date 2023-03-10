import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const NewJournalEntry = (props) => {
  const [user, token] = useAuth();
  const [date, setDate] = useState("");
  const [input_a, setA] = useState("");
  const [input_b, setB] = useState("");
  const [input_c, setC] = useState("");
  const [mood, setMood] = useState("");
  const [image, setImage] = useState("");
  const [newEntry, setEntry] = useState("");

  useEffect(() => {
    addNewEntry();
  }, []);

  async function addNewEntry() {
    try {
      let newEntry = {
        date: date,
        input_a: input_a,
        input_b: input_b,
        input_c: input_c,
        mood: mood,
        image: image,
      };

      let response = await axios.post(
        `http://127.0.0.1:8000/api/capstone/addEntry/`,
        newEntry,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      setEntry(response.data);
    } catch (error) {
      console.log(error.response.data);
      addNewEntry();
      props.newJournalEntryProperty(newEntry);
    }
  }

  useNavigate("/");

  function handleSubmit(event) {
    event.preventDefault();
    addNewEntry();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-entry-table">
        <div className="form-group">
          <p>
            <label>Date </label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </p>
          <p>
            <label>How did you move today? </label>
            <input
              type="text"
              className="form-control"
              value={input_a}
              onChange={(event) => setA(event.target.value)}
            />
          </p>
          <p>
            <label>How do you feel? </label>
            <input
              type="text"
              className="form-control"
              value={input_b}
              onChange={(event) => setB(event.target.value)}
            />
          </p>
          <p>
            <label>Any other thoughts? </label>
            <input
              type="text"
              className="form-control"
              value={input_c}
              onChange={(event) => setC(event.target.value)}
            />
          </p>
          <p>
            <label>
              What is your mood on a scale of 1-5, 5 being fabulous?
            </label>
            <input
              type="text"
              className="form-control"
              value={mood}
              onChange={(event) => setMood(event.target.value)}
            />
          </p>
          <p>
            <label>Add image</label>
            <input
              type="file"
              className="image"
              accept="image/png, image/jpeg"
              onChange={(event) => setImage(event.target.value)}
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

export default NewJournalEntry;
