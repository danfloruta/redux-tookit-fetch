import { createSlice } from "@reduxjs/toolkit";

const initialTableState = {
  items: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState: initialTableState,
  reducers: {
    replaceTableItem(state, action) {
      state.items = action.payload.items;
    },
    updateTableItem(state, action) {
      const newItem = action.payload;
      let existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.id = newItem.id;
        existingItem.name = newItem.name;
        existingItem.email = newItem.email;
        existingItem.address = newItem.address;
      }
    },
    addTableItem(state, action) {
      const newItem = action.payload;
      if (newItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          email: newItem.email,
          address: newItem.address,
        });
      }
    },
    deleteTableItem(state, action) {
      const id = action.payload;
      if (id) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});
export const tableActions = tableSlice.actions;
export default tableSlice;
