import React from "react";
import { useState } from "react";

const SearchBar = (props) => {

    const[search, SetSearch] = useState()

    return (
        <div className="search-bar">
        <div>
           <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
           <button className="search-btn" onClick={() => SetSearch()}>Filter</button>
           </div>
            <table>
                <tbody className="search-table">
                    {props.entry.filter((entry) => {
                     if (search === ""){
                        return entry;
                        }
                    if (entry.date.includes(search) ||
                    entry.title.includes(search) ||
                    entry.input_a.includes(search) ||
                    entry.input_b.includes (search) ||
                    entry.input_c.includes(search) ||
                    entry.mood.includes(search)){
                        return entry;
                    }
                })
                    .map((entry, index) => {
                        return (
                            <>
                            <table>
                                <tr key={index}>
                                <td className="search-td">{entry.date}</td>
                                <td className="search-td">{entry.title}</td>
                                </tr>
                            </table>
                            </>
                        )
                    })};
                </tbody>
            </table>
        </div>
    );
}

export default SearchBar;