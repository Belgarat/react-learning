import { create } from 'zustand';
import { AuthorModel, CommentModel, CommentSystemModel } from './Interfaces'

export const useStore = create<CommentSystemModel>((set) => ({ 
  maxlength: 200,
  
  /*comment: {
    name: "John Smith",
    avatar: "img_avatar.png",
    email: "testuser@testmail.com",
    body: "",
    likes: 0,
  },*/
  comment: {
    attributes: {
      body: "",
      likes: 0,
      author: {
        data: {
          id: 1,
          attributes:{
            name: "John Smith",
            email: "testuser@testmail.com",
          }
        }
      }
    }
  },
  comments: [],
  authors: [],
  //update comment textarea
  updateBodyValue: (newValue: string) => {
    set((state) => ({
      comment: {...state.comment, body: newValue},
    }));
  },
  
  addComment: (comment: CommentModel) => {
    console.log('Add comment: ', comment);
    //TODO: add to DB and then add to local store
    set((state) => {
      //console.log("add Comment", state, comment);
      return ({comments: [...state.comments, comment]})
    });
  },

  initComments: (comments: CommentModel[]) => {
    set((state) => {
      //console.log("add Comment", state, comment);
      return ({comments: [...comments]})
    });
  },

  initAuthors: (authors: AuthorModel[]) => {
    set((state) => {
      //console.log("add Comment", state, comment);
      return ({authors: [...authors]})
    });
  },

  likeComment: (id: number|undefined) => {
    set((state) => ({
      comments: state.comments.map((cmnt) =>
        cmnt.id === id
          ? { ...cmnt, attributes: {...cmnt.attributes, likes: (cmnt.attributes.likes + 1)}}
          : cmnt
      ),
    }));
  },

  editComment: (id: number|undefined, body: string) => {
    set((state) => ({
      comments: state.comments.map((cmnt) =>
        cmnt.id === id
          ? { ...cmnt, attributes : {...cmnt.attributes , body: body}}
          : cmnt
      ),
    }));
  },

  removeComment: (id: number|undefined) => {
    //console.log('Remove comment: ', id);
    //TODO: reove from DB and then remove from local store
    set((state) => ({
      comments: state.comments.filter((cmnt) => cmnt.id !== id),
    }));
  },

}));

const BearerToken = 'Bearer d926f5b2471d35a18a1d7f45ef53aa54e696a2bc0c18f8c45266a609097441c47ebc9c6f7401bcd212c621576555a9905b88386dbf208f0a5bdd5bcefb30a202f19dd15547b6e9cc61a0ec26948666a5421d9603b663ebc3f0988514c316453167f18264a0d5f39b85782e7c86c6e598b935da36415ba2756e7de22b602ec1fb';
const headers = { 'Authorization': BearerToken };

// TODO: fetch and add preloaded comments
export const fetchComments = async () => {
    const response = await fetch("http://localhost:1337/api/comments?populate=*", {headers})
    .then(response => response.json())
    //console.log("Response: ",response.data);
    return response.data;
}
// TODO: fetch and add preloaded comments
export const fetchAuthors = async () => {
    const response = await fetch("http://localhost:1337/api/authors?populate=*", {headers})
    .then(response => response.json())
    //console.log("Response: ",response.data);
    return response.data;
}

export const putComment = async (comments: CommentModel[], id: number) => {
  const comment: CommentModel|undefined = comments.find((comment) => comment.id === id);
  let body = {};
  if (comment) {
    body = {data: {
      body: comment.attributes.body,
      likes: comment.attributes.likes
    }};
  }
  const requestOptions: RequestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': BearerToken },
      body: JSON.stringify(body),
  }
  //Se
  const response = await fetch("http://localhost:1337/api/comments/"+id, {...requestOptions});
  return response;
}