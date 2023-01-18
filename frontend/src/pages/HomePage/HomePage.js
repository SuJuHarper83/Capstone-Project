import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

    const [user, token] = useAuth();
    const [date, setDate] = useState("");
    const [input_a, setA] = useState("");
    const [input_b, setB] = useState("");
    const [input_c, setC] = useState("");
    const [mood, setMood] = useState("");
    const [image, setImage] = useState("");

    // useEffect(() => {
    //   ();
    // }, [token]);

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            date: date,
            input_a: input_a,
            input_b: input_b,
            input_c: input_c,
            mood: mood,
            image: image
        };
        console.log(newEntry)
    }

    return (
      <div className="container">
      <h1>Home Page for {user.username}!</h1>
        <form onSubmit={handleSubmit} className="add-entry-table">
            <div className="form-group">
                <p>
                <label>Date </label>
                <input type="date" className="form-control" value={date} onChange={(event) => setDate(event.target.value)}/>
                </p>
                <p>
                <label>How did you move today? </label>
                <input type="text" className="form-control" value={input_a} onChange={(event) => setA(event.target.value)}/>
                </p>
                <p>
                <label>How do you feel? </label>
                <input type="text" className="form-control" value={input_b} onChange={(event) => setB(event.target.value)}/>
                </p>
                <p>
                <label>Any other thoughts? </label>
                <input type="text" className="form-control" value={input_c} onChange={(event) => setC(event.target.value)}/>
                </p>
                <p>
                <label>What is your mood on a scale of 1-5, 5 being fabulous?</label>
                <input type="text" className="form-control" value={mood} onChange={(event) => setMood(event.target.value)}/>
                </p>
                <p>
                <label>Add image</label>
                <input type="file" className="image" accept="image/png, image/jpeg" onChange={(event) => setImage(event.target.value)}/>
                </p>
                <p>
                    <input type="submit" className="button" />
                </p>
            </div>
        </form>
        </div>
    )
}

export default HomePage;

  //TODO: Add an AddCars Page to add a car for a logged in user's garage
// const [user, token] = useAuth();
// const [cars, setCars] = useState([]);

// useEffect(() => {
//   const fetchCars = async () => {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       setCars(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
//   fetchCars();
// }, [token]);
