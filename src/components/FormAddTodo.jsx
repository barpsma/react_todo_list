import React from "react";

const FormAddTodo = () => {
  return (
    <div>
      <h1 className="title">Todos</h1>
      <h2 className="subtitle">Add New Todo</h2>
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
                <div className="control">
                  <button className="button is-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddTodo;
