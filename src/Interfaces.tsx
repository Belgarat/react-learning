export interface CommentModel {
  //post ID father of the comment
  postID?:number;
  //id of the comment
  id?:number;
  //author username
  name: string;
  //author email
  email?: string;
  //body of the comment
  body: string;
  //when the comment was added
  date?: Date;
  //not yet implemented... to be used to reply to other comment
  commentID?: number;
}

export interface CommentSystemModel {
  maxlength: number;
  comments: CommentModel[];
  addComment: (body: string, name?: string, email?: string, postID?:number) => void;
  removeComment: (id: number) => void;
  editComment: (id: number) => void;
}