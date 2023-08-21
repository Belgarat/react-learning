import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"
import "./ReplyForm.css";

export const ReplyForm = ({maxlength, updateBodyValue, addComment, removeComment, editComment, comment}: {maxlength: number, updateBodyValue?: any, addComment?: any, removeComment?: any, editComment?: any, comment: CommentModel}) => {
  return(
    <>
      <div id="ReplyForm" className="replyformflex">
          <div className="replyformflex-first-row">
            <Avatar/>
            <InputText maxlength={maxlength} updateBodyValue={updateBodyValue} comment={comment}/>
          </div>
          <div className="replyformflex-last-row">
            <ReplyCancelButton updateBodyValue={updateBodyValue} comment={comment}/>
            <ReplySaveButton comment={comment} updateBodyValue={updateBodyValue} addComment={addComment}/>
          </div>
      </div>
    </>
  )
}