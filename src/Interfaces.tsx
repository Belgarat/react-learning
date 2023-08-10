export interface CommentModel {
  postID?:number;
  id?:number;
  name: string;
  email?: string;
  body: string;
  maxlength: number;
  date?: Date;
  onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CommentListModel {
  comments: CommentModel[];
}

export interface CommentSystemModel {
  comment: CommentModel;
  comments: CommentListModel;
  onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}