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
    console.log("likeComment: ", id);
    set((state) => ({
      comments: state.comments.map((cmnt) =>
        cmnt.id === id
          ? { ...cmnt, attributes: {...cmnt.attributes, likes: (cmnt.attributes.likes + 1)}}
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

const BearerToken = 'Bearer 27d6ca3b64eb0182855f2b104ada0452f5952396ef19ff273e277d0624f40e0097f87bd715c5714411debb1a5bf0d19b152dbcef6b94d020066acb3cd168d89a6e8df0d83fb9df61438235daf025834aa622995cb922603f98dc2972d3af4528265b87fba5013f5bbc51508d395dc59126453012104665e6146243b2c49aa1ba';
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