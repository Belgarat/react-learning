import { create } from 'zustand';
import { CommentModel, CommentSystemModel } from './Interfaces'

export const useStore = create<CommentSystemModel>((set) => ({ 
  maxlength: 100,
  comments: [],
  //TODO: fetch and add preloaded comments
  addComment: (body: string, name?: string, email?: string, postID?:number) => {
    //TODO: add to DB and then add to local store
    set((state) => ({
      comments: [
        ...state.comments,
        {
          body,
          name,
          email,
          postID,
          //TODO: add current datetime to string
        } as CommentModel,
      ],
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