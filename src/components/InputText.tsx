import React from "react";
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";

export const InputText = ({maxlength, comment}: {maxlength: number, comment: CommentModel}) => {
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
          if (replayEvents.onValueChange) {
            replayEvents.onValueChange(event.target.value);
          }
        }
      }}
      />
      <CharCounter {...maxlength}/>
    </>
  )
}
