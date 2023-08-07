export interface CommentModel {
  id?:number;
  author: number;
  text: string;
  maxlength: number;
  onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CommentListModel {
  list: CommentModel[];
}

export interface CommentSystemModel {
  comment: CommentModel;
  comments: CommentListModel;
  onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}