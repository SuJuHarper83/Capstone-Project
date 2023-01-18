import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SearchBar = (props) => {

    const[search, SetSearch] = useState()

    return (
        <div className="search-bar">
        <div>
           <input type="text" value={search} onChange={(event) => SetSearch(event.target.value)}/>
           <button className="search-btn" onClick={() => SetSearch()}>Filter</button>
           </div>
                {/* <tbody>
                        <tr className="search-head">
                            <th className="search-th">Title</th>
                            <th className="search-th">Artist</th>
                            <th className="search-th">Album</th>
                            <th className="search-th">Release Date</th>
                            <th className="search-th">Genre</th>
                            <th className="search-th"></th>
                        </tr>
                </tbody> */}
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