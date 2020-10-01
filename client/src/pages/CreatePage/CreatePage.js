import React, { useEffect } from "react";
import { useCreate } from "../../hooks/create.hook";

export const CreatePage = () => {

  const create = useCreate();
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            placeholder="Link"
            id="link"
            type="text"
            className="validate"
            {...create.input}
          />
          <label htmlFor="link" className="white-text">
            Link
          </label>
        </div>
        <button className="btn" {...create.submit}>Create</button>
      </div>
    </div>
  );
};
