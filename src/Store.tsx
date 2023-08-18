import { create } from 'zustand';
import { CommentModel, CommentSystemModel } from './Interfaces'

export const useStore = create<CommentSystemModel>((set) => ({ 
  maxlength: 100,
  comment: {
    name: "author name",
    body: ""
  },
  comments: [],
  //TODO: fetch and add preloaded comments
  //update comment textarea
  updateBodyValue: (newValue: string) => {
    set((state) => ({
      comment: {
        name: state.comment.name,
        body: newValue,
      } 
    }));
  },
  
  addComment: (comment: CommentModel) => {
    //console.log(comment);
    //TODO: add to DB and then add to local store
    set((state) => ({
      comments: [...state.comments, comment],
    }));
    comment.body="";
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