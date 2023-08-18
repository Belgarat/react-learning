import React from "react";
import { CommentModel } from "../Interfaces"
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
            comment.body=updateBodyValue(event.target.value);
        }
      }}
      />
      <CharCounter body={comment.body} maxlength={maxlength}/>
    </>
  )
}
