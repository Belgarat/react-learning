import { CommentModel, CommentSystemModel } from "../Interfaces";
//import "./ReplyForm.css";

export const ReplyCancelButton = ({comment, updateBodyValue, comments}: {comment: CommentModel, updateBodyValue:any, comments: CommentModel[]}) => {
  return(
    <>
      <button 
      className="replyformflex-button-cancel"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          //console.log("Clicked Cancel");
          comment.body=updateBodyValue("");
        }
      }>Cancel</button>
    </>
  )
}