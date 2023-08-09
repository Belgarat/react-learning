import React from "react"
import { CommentModel } from "../Interfaces"
import "./ReplyForm.css";

export const ReplySaveButton = (props: CommentModel) => {
  return(
    <>
      <button 
      className="replyformflex-button-add"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          if(props.clickAdd && props.text.length>0){
            props.clickAdd(event);
          }
        }
      }>Add</button>
    </>
  )
}