import React from "react";
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";

export const InputText = ({comment, onValueChange, clickAdd, clickCancel}: {comment: CommentModel, onValueChange: React.EventHandler<any>, clickAdd: React.EventHandler<any>, clickCancel: React.EventHandler<any>}) => {
  return(
    <> 
      <textarea className="replyform-textarea"
        name="comment"
        value={comment.body}
        placeholder="Insert your comment..." 
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        //check maxlength
        if (comment.maxlength && event.target.value.length <= comment.maxlength) {
          //check type
          if (onValueChange) {
            onValueChange(event.target.value);
          }
        }
      }}
      />
      <CharCounter {...comment}/>
    </>
  )
}
