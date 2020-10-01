import React from "react";
import { useCopy } from "../../hooks/copy.hook";

export const LinkCard = ({ link }) => {
  const { copy } = useCopy();

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Link info</span>
            <p>
              Minimized link:{" "}
              <a href={link.from} target="_blank" rel="noopener noreferrer">
                {link.from}
              </a>
              <button
                className="btn"
                onClick={() => {
                  copy(link.from);
                }}
                style={{ marginLeft: "5px" }}
              >
                <i className="material-icons">content_copy</i>
              </button>
            </p>
            <p>
              Original link:{" "}
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.to.slice(0, 50)}
              </a>
            </p>
            <p>
              Clicks count: <strong>{link.clicks}</strong>
            </p>
            <p>
              Creation date:
              <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
