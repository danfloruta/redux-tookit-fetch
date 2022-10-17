import "./App.css";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchItemsFromFirebase,
  sendItemsToFirebase,
} from "./store/tableActions";

let isInitial = true;

function App() {
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsFromFirebase());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendItemsToFirebase(table));
  }, [dispatch, table]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
