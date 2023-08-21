import { CommentModel } from "../Interfaces";

export const ReplyCancelButton = ({comment, updateBodyValue}: {comment: CommentModel, updateBodyValue:any}) => {
  return(
    <>
      <button 
      className="replyformflex-button-cancel"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          updateBodyValue("");
        }
      }>Cancel</button>
    </>
  )
}