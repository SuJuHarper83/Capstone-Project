import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayEntries from "../../components/DisplayEntries/DisplayEntries";
import SearchBar from "../../components/SearchEntries/SearchEntries";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

    const [user, token] = useAuth();
    const [entry, setEntry] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      getEntries();
    }, [token]);


    async function getEntries(){
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/capstone/entry/`);
        console.log(response.data.items);
        setEntry(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  
      function handleSubmit(event) {
        event.preventDefault();
        getEntries()
      }


      return (
        <>
          <div className="title-container-a">
            <h1>Home Page for {user.username}!</h1>
          </div>
          <div className="search-bar">
          <SearchBar entry={entry} />
          </div>
          <div>
          <DisplayEntries parentEntries ={entry} />
          </div>
        </>
      );
    
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
