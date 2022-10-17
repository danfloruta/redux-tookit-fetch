import axios from "axios";
import { tableActions } from "./tableSlice";

export const sendItemsToFirebase = (cart) => {
  return async (dispatch) => {
    const sendItems = async () => {
      const response = await fetch(
        "https://crud-operations-e404c-default-rtdb.firebaseio.com/crud.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
          }),
        }
      );
    };
    try {
      await sendItems();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchItemsFromFirebase = () => {
  return async (dispatch) => {
    const receiveItems = async () => {
      const response = await fetch(
        "https://crud-operations-e404c-default-rtdb.firebaseio.com/crud.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const data = await receiveItems();
      dispatch(
        tableActions.replaceTableItem({
          items: data.items || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
