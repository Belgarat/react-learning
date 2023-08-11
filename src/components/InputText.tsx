import React from "react";
import { CommentModel, CommentSystemModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";

export const InputText = ({comment, replayEvents}: {comment: CommentModel, replayEvents: CommentSystemModel}) => {
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
          if (replayEvents.onValueChange) {
            replayEvents.onValueChange(event.target.value);
          }
        }
      }}
      />
      <CharCounter {...comment}/>
    </>
  )
}
