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
// TODO: fetch and add preloaded comments
export const fetchComments = async () => {
    const response = await fetch("http://localhost:1337/api/comments?populate=*")
    return response.json();
}
// TODO: fetch and add preloaded comments
export const fetchAuthors = async () => {
    const response = await fetch("http://localhost:1337/api/authors?populate=*")
    return response.json();
}