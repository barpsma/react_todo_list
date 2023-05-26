import React from "react";

const FormEditTodo = () => {
  return (
    <div>
      <h1 className="title">Todos</h1>
      <h2 className="subtitle">Update Todo</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="conten">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">Completed</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-success">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      t
    </div>
  );
};

export default FormEditTodo;
