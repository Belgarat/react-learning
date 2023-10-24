import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: 1,
  comments: [
    {
      id: 1,
      attributes: {
        body: "prova111",
        likes: 3,
        createdAt: "2023-09-18T08:44:57.064Z",
        updatedAt: "2023-10-17T06:27:36.114Z",
        publishedAt: "2023-09-18T09:12:07.561Z",
        author: {
          data: {
            id: 1,
            attributes: {
              name: "John Smith",
              email: "js@js.test",
              createdAt: "2023-09-18T12:13:10.947Z",
              updatedAt: "2023-09-18T12:13:11.934Z",
              publishedAt: "2023-09-18T12:13:11.932Z",
            },
          },
        },
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
        author: {
          data: {
            id: 2,
            attributes: {
              name: "Mary Jane",
              email: "js22@jswqeqw.tst",
              createdAt: "2023-09-25T12:22:43.761Z",
              updatedAt: "2023-09-25T12:22:45.651Z",
              publishedAt: "2023-09-25T12:22:45.648Z",
            },
          },
        },
      },
    },
  ],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentAdded(state, action) {
      //console.log("commentAdded: ", state, action.payload);
      state.comments.push(action.payload);
    },
    commentDeleted(state, action) {
      //console.log("commentDeleted: ", state, action.payload);
      const idToDelete = action.payload;
      //console.log(idToDelete.id);
      state.comments = state.comments.filter(
        (cmnt) => cmnt.id !== idToDelete.id
      );
      return state;
    },
    commentEdited(state, action) {
      //console.log("commentDeleted: ", state, action.payload.id);
      const { id, body } = action.payload;
      const existingPost = state.comments.find((cmnt) => cmnt.id === id);
      if (existingPost) {
        existingPost.attributes.body = body;
      }
    },
    commentLiked(state, action) {
      const { id } = action.payload;
      const existingPost = state.comments.find((cmnt) => cmnt.id === id);
      if (existingPost) {
        existingPost.attributes.likes = existingPost.attributes.likes + 1;
      }
    },
  },
});

export const { commentAdded, commentDeleted, commentEdited, commentLiked } =
  commentsSlice.actions;

export default commentsSlice.reducer;
