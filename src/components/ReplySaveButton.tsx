import React from "react"
import { CommentModel } from "../Interfaces"

export const ReplySaveButton = ({comment, addComment, updateBodyValue}: {comment: CommentModel, addComment: any, updateBodyValue: any}) => {
  return(
    <>
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
    </>
  )
}