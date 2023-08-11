import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"
//import "../style.css";
import "../typography.css";
import "./ReplyForm.css";

export const ReplyForm = ({comment, onValueChange, clickAdd, clickCancel}: {comment: CommentModel, onValueChange: React.EventHandler<any>, clickAdd: React.EventHandler<any>, clickCancel: React.EventHandler<any>}) => {
  return(
    <>
      <div id="ReplyForm" className="replyformflex">
          <div className="replyformflex-first-row">
            <Avatar/>
            <InputText comment={comment} onValueChange={onValueChange} clickAdd={clickAdd} clickCancel={clickCancel}/>
          </div>
          <div className="replyformflex-last-row">
            <ReplyCancelButton {...props}/>
            <ReplySaveButton {...props}/>
          </div>
      </div>
    </>
  )
}