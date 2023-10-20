import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    attributes: {
      body: "prova111",
      likes: 3,
      createdAt: "2023-09-18T08:44:57.064Z",
      updatedAt: "2023-10-17T06:27:36.114Z",
      publishedAt: "2023-09-18T09:12:07.561Z",
    },
  },
  {
    id: 2,
    attributes: {
      body: "This is the sec6onfd commrent.\nBye",
      likes: 5,
      createdAt: "2023-09-18T10:07:12.949Z",
      updatedAt: "2023-10-17T08:23:13.725Z",
      publishedAt: "2023-09-18T10:07:31.007Z",
    },
  },
];

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentsSlice.reducer;
