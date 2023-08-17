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
  //addComment: (body: string, name?: string, email?: string, postID?:number) => {
  addComment: (comment: CommentModel) => {
    //TODO: add to DB and then add to local store
    set((state) => ({
      comments: [...state.comments, comment],
    }));
  },
  removeComment: (id: number) => {
    //TODO: reove from DB and then remove from local store
    set((state) => ({
      comments: state.comments.filter((comment) => comment.id !== id),
    }));
  },
  //TODO: editComment
  editComment: (id: number) => {  },
}));