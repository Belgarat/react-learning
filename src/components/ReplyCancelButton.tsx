import { CommentModel, CommentSystemModel } from "../Interfaces";
//import "./ReplyForm.css";

export const ReplyCancelButton = ({comment, replayEvents}: {comment: CommentModel, replayEvents: CommentSystemModel}) => {
  return(
    <>
      <button 
      className="replyformflex-button-cancel"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if(replayEvents.clickCancel){
          replayEvents.clickCancel(event);
        }
      }}>Cancel</button>
    </>
  )
}