import { create } from 'zustand';
import { CommentModel, CommentSystemModel } from './Interfaces'

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

  likeComment: (id: number|undefined) => {
    console.log("likeComment: ", id);
    set((state) => ({
      comments: state.comments.map((cmnt) =>
      cmnt.id === id
          ? ({ ...cmnt, likes: (cmnt.attributes.likes+1) } as CommentModel)
          : cmnt
      ),
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

  removeComment: (id: number|undefined) => {
    console.log('Remove comment: ', id);
    //TODO: reove from DB and then remove from local store
    set((state) => ({
      comments: state.comments.filter((cmnt) => cmnt.id !== id),
    }));
  },

}));

const BearerToken = 'Bearer dbf948aa5624edb748c32519df7f9493388cfbac1d16f9d7f326967113ac6b78cc14e82e78f34b952b430aef282494e0de7f676835ee1387df21ec4f70c2158579a6622283e4ac67b0b5d9e2af38c56b08a720765a734643e5184731d413c9d421970be610d7a9d82d5cb5074628ac1842dce9343ded82673920e9a8ba3d524d';
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