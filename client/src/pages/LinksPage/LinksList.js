import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">No Links</p>;
  }

  const copy = async (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Original</th>
            <th></th>
            <th>Minimized</th>
            <th></th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <td>{index + 1} </td>
                <td>{link.to}</td>
                <td>
                  {" "}
                  <button
                    className="btn"
                    onClick={() => {
                      copy(link.to);
                    }}
                  >
                    <i className="material-icons">content_copy</i>
                  </button>
                </td>
                <td>{link.from}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      copy(link.from);
                    }}
                  >
                    <i className="material-icons">content_copy</i>
                  </button>
                </td>
                <td>
                  <Link to={`/detail/${link._id}`}>
                    <i className="material-icons">description</i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
