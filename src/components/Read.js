import React from "react";
import "./Read.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/tableSlice";

const Read = () => {
  const items = useSelector((state) => state.table.items);
  const dispatch = useDispatch();
  const deleteItemHandler = (value) => {
    dispatch(tableActions.deleteTableItem(value));
  };

  return (
    <>
      <div className="tableContainer">
        <Link className="btn btn-primary p-1 m-2" to="/create">
          + Add Person
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <div className="buttons">
                    <Link
                      className="btn btn-primary"
                      to="/update"
                      state={{
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        address: item.address,
                      }}
                    >
                      Update
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItemHandler(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
