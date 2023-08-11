import React from "react"
import { CommentModel, CommentSystemModel } from "../Interfaces"
//import "./ReplyForm.css";

export const ReplySaveButton = ({comment, replayEvents}: {comment: CommentModel, replayEvents: CommentSystemModel}) => {
  return(
    <>
      <button 
      className="replyformflex-button-add"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          if(replayEvents.clickAdd && comment.body.length>0){
            replayEvents.clickAdd(event);
          }
        }
      }>Add</button>
    </>
  )
}