import React from "react";

export const LinkCard = ({ link }) => {
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
            </p>
            <p>
              Original link:{" "}
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.to}
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
