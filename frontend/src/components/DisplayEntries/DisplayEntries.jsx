import React from "react";
// import { useEffect, useState } from "react";
import AddJournalEntry from "../AddJournalEntry/AddJournalEntry";

const DisplayEntries = (props) => {
    return (
        <div>
          <div className="add-entry"><button className="add-btn" onClick={() => AddJournalEntry()}>Add Entry</button></div>
          <table className="journal-table">
            <tbody>
              <tr className="table-heading">
                <th className="table-title">Date</th>
                <th className="table-title">Title</th>
              </tr>
              {props.parentEntries.map((entry, index) => {
              return (
              <tr key={index}>
                <td className="table-data">{entry.date}</td>
                <td className="table-data">{entry.title}</td>
              </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )
}

export default DisplayEntries