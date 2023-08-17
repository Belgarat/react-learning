import React from "react";
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";

export const InputText = ({maxlength, updateBodyValue, comment}: {maxlength: number, updateBodyValue: any, comment: CommentModel}) => {
  return(
    <> 
      <textarea className="replyform-textarea"
        name="comment"
        value={comment.body}
        placeholder="Insert your comment..." 
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        //check maxlength
        if (maxlength && event.target.value.length <= maxlength) {
          //check type
          //if (replayEvents.onValueChange) {
            //comment.onValueChange(event.target.value);
            comment.body=updateBodyValue(event.target.value);
          //}
        }
      }}
      />
      <CharCounter body={comment.body} maxlength={maxlength}/>
    </>
  )
}
