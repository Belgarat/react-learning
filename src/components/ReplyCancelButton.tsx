import { CommentModel } from "../Interfaces";
//import "./ReplyForm.css";

export const ReplyCancelButton = (props: CommentModel) => {
  return(
    <>
      <button 
      className="replyformflex-button-cancel"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if(props.clickCancel){
          props.clickCancel(event);
        }
      }}>Cancel</button>
    </>
  )
}