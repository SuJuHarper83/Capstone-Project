import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const AddExerciseForm = (props) => {

    const [user, token] = useAuth();
    const [title, setTitle] = useState("");
    const [input_d, setD] = useState("");
    const [input_e, setE] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newExercise = {
            title: title,
            input_d: input_d,
            input_e: input_e
            };
            console.log(newExercise)
            props.addExerciseProperty(newExercise)
            }

    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="add-entry-table">
            <div className="form-group">
                <p>
                <label>Title of Exercise </label>
                <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </p>
                <p>
                <label>Description </label>
                <input type="text" className="form-control" value={input_d} onChange={(event) => setD(event.target.value)}/>
                </p>
                <p>
                <label>Examples </label>
                <input type="text" className="form-control" value={input_e} onChange={(event) => setE(event.target.value)}/>
                </p>
                <p>
                <input type="submit" className="button" />
                </p>
            </div>
        </form>
    </div>
    )

}

export default AddExerciseForm