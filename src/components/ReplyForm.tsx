import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"
//import "../style.css";
import "../typography.css";
import "./ReplyForm.css";

export const ReplyForm = ({...props}: {comment: CommentModel, onValueChange: CommentSystemModel, clickAdd: CommentSystemModel, clickCancel: CommentSystemModel}) => {
  return(
    <>
      <div id="ReplyForm" className="replyformflex">
          <div className="replyformflex-first-row">
            <Avatar/>
            <InputText {...props}/>
          </div>
          <div className="replyformflex-last-row">
            <ReplyCancelButton {...props}/>
            <ReplySaveButton {...props}/>
          </div>
      </div>
    </>
  )
}