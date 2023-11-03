import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommentModel } from "../../Interfaces";

const initialState = {
  me: 1,
  status: "idle",
  error: null,
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

export const selectAllPosts = (state: any) => state.comments;

export const selectCommentById = (state: any, commentId: number) =>
  state.posts.find((cmnt: CommentModel) => cmnt.id === commentId);

export const fetchPosts = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const BearerToken =
      "Bearer d926f5b2471d35a18a1d7f45ef53aa54e696a2bc0c18f8c45266a609097441c47ebc9c6f7401bcd212c621576555a9905b88386dbf208f0a5bdd5bcefb30a202f19dd15547b6e9cc61a0ec26948666a5421d9603b663ebc3f0988514c316453167f18264a0d5f39b85782e7c86c6e598b935da36415ba2756e7de22b602ec1fb";
    const headers = { Authorization: BearerToken };
    const response = await fetch(
      "http://localhost:1337/api/comments?populate=*",
      { headers }
    ).then((response) => response.json());
    return response.data;
  }
);
