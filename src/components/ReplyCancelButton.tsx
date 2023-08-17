import { CommentModel, CommentSystemModel } from "../Interfaces";
//import "./ReplyForm.css";

export const ReplyCancelButton = ({comment, comments}: {comment: CommentModel, comments: CommentModel[]}) => {
  return(
    <>
      <button 
      className="replyformflex-button-cancel"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          console.log("Clicked Cancel");
        //if(replayEvents.clickCancel){
          //replayEvents.clickCancel(event);
        }
      }>Cancel</button>
    </>
  )
}