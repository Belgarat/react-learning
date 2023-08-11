import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"
//import "../style.css";
import "../typography.css";
import "./ReplyForm.css";

export const ReplyForm = ({comment, replayEvents}: {comment: CommentModel, replayEvents: CommentSystemModel}) => {
  return(
    <>
      <div id="ReplyForm" className="replyformflex">
          <div className="replyformflex-first-row">
            <Avatar/>
            <InputText comment={comment} replayEvents={replayEvents}/>
          </div>
          <div className="replyformflex-last-row">
            <ReplyCancelButton comment={comment} replayEvents={replayEvents}/>
            <ReplySaveButton comment={comment} replayEvents={replayEvents}/>
          </div>
      </div>
    </>
  )
}