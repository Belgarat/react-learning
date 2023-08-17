import React from "react"
import { CommentModel, CommentSystemModel } from "../Interfaces"
//import "./ReplyForm.css";

export const ReplySaveButton = ({comment, comments}: {comment: CommentModel, comments: CommentModel[]}) => {
  return(
    <>
      <button 
      className="replyformflex-button-add"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          if(comment.body.length>0){
            console.log("Clicked ADD");
            //comments.addComment(comment.body,comment.name,comment.email);
          }
        }
      }>Add</button>
    </>
  )
}