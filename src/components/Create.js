import React, { useState } from "react";
import "./Create.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/tableSlice";

const Create = () => {
  // const [id, setId] = useState("");
  const [id, setId] = useState(Math.trunc(Math.random() * 1000000));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createItemHandler = (e) => {
    e.preventDefault();

    dispatch(
      tableActions.addTableItem({
        id: id,
        name: name,
        email: email,
        address: address,
      })
    );
    navigate("/");
    console.log(id);
  };
  return (
    <div>
      <div className="createBody">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <h2>Create</h2>
        <form onSubmit={createItemHandler}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name=""
              id="address"
              className="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-warning p-1 m-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
