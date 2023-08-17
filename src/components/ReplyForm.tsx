import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"
import "./ReplyForm.css";

export const ReplyForm = ({maxlength, comments, addComment, removeComment, editComment, comment}: {maxlength: number, comments: CommentSystemModel, addComment: CommentSystemModel, removeComment: CommentSystemModel, editComment: CommentSystemModel, comment: CommentModel}) => {
  return(
    <>
      <div id="ReplyForm" className="replyformflex">
          <div className="replyformflex-first-row">
            <Avatar/>
            <InputText maxlength={maxlength} comment={comment}/>
          </div>
          <div className="replyformflex-last-row">
            <ReplyCancelButton comments={comments} replayEvents={replayEvents}/>
            <ReplySaveButton comments={comments} replayEvents={replayEvents}/>
          </div>
      </div>
    </>
  )
}