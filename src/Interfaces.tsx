export interface CommentModel {
  postID?:number;
  id?:number;
  name: string;
  email?: string;
  body: string;
  maxlength?: number;
  date?: Date;
  /*onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;*/
}

export interface CommentSystemModel {
  onValueChange?: (newValue: string) => void;
  clickAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}