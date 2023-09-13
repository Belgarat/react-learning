import { Avatar } from "./Avatar"
import { CharCounter } from "./CharCounter";
import { CommentModel } from "../Interfaces"
import "./ReplyForm.css";

export const ReplyForm = ({maxlength, updateBodyValue, addComment, comment}: {maxlength: number, updateBodyValue?: any, addComment?: any, comment: CommentModel}) => {
  return(
    <>
    <div id="ReplyForm" className="replyformflex">
        <div className="replyformflex-first-row">
          <Avatar/>
          <textarea className="replyform-textarea"
            name="comment"
            value={comment.body}
            placeholder="Insert your comment..." 
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            //check maxlength
            if (maxlength && event.target.value.length <= maxlength) {
                updateBodyValue(event.target.value);
            }
          }}
          />
          <CharCounter body={comment.body} maxlength={maxlength}/>
        </div>
        <div className="replyformflex-last-row">
          {/* CANCEL BUTTON */}
          <button 
          className="replyformflex-button-cancel"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              updateBodyValue("");
            }
          }>Cancel</button>

          {/* SAVE BUTTON */}
          <button 
          className="replyformflex-button-add"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if(comment.body.length>0){
                //console.log("Clicked ADD");
                addComment(comment);
                updateBodyValue('');
              }
            }
          }>Add</button>
        </div>
    </div>
    </>
  )
}