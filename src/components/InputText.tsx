import React from "react";
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";

export const InputText = ({...props}: {comment: CommentModel, onValueChange: CommentSystemModel, clickAdd: CommentSystemModel, clickCancel: CommentSystemModel}) => {
  return(
    <> 
      <textarea className="replyform-textarea"
        name="comment"
        value={props.comment.body}
        placeholder="Insert your comment..." 
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        //check maxlength
        if (props.maxlength && event.target.value.length <= props.maxlength) {
          //check type
          if (props.onValueChange) {
            props.onValueChange(event.target.value);
          }
        }
      }}
      />
      <CharCounter {...props}/>
    </>
  )
}
