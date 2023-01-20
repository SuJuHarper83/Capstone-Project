import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import NewJournalEntry from "../AddJournalEntry/AddJournalEntry";

const DisplayEntries = (props) => {
  
  const [user, token] = useAuth();

  useEffect(() => {
    DisplayEntries();
  }, []);

    return (
      <div>
        <div className="add-entry">
          <button className="add-btn" onClick={() => NewJournalEntry()}>
            Add Entry
          </button>
        </div>
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
    );
};

export default DisplayEntries;
