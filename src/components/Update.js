import React, { useState } from "react";
import "./Create.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/tableSlice";

const Update = (props) => {
  const location = useLocation(props.state);
  // const id = location.state.id;
  // const { id, name, email, address } = location;
  const [newId, setNewId] = useState(location.state.id);
  const [newName, setNewName] = useState(location.state.name);
  const [newEmail, setNewEmail] = useState(location.state.email);
  const [newAddress, setNewAddress] = useState(location.state.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      tableActions.updateTableItem({
        id: newId,
        name: newName,
        email: newEmail,
        address: newAddress,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="createBody">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <h2>Update</h2>
        <form onSubmit={updateItemHandler}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              className="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              className="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name=""
              id="address"
              className="address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-warning p-1 m-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
