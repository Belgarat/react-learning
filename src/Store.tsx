import { create } from 'zustand';
import { CommentModel, CommentSystemModel } from './Interfaces'

export const useStore = create<CommentSystemModel>((set) => ({ 
  maxlength: 100,
  comment: {
    name: "author name",
    body: "",
    likes: 0,
  },
  comments: [],
  //TODO: fetch and add preloaded comments
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
      console.log("add Comment", state, comment);
      return ({comments: [...state.comments, comment]})
    });
  },

  removeComment: (id: number|undefined) => {
    //TODO: reove from DB and then remove from local store
    set((state) => ({
        comments: id ? state.comments.filter((comment) => comment.id !== id) : state.comments,
    }));
  },

  //TODO: editComment
  editComment: (id: number) => {  },
}));