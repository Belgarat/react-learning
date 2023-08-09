import React from "react";
import { CommentModel } from "../Interfaces"
import "./ReplyForm.css";

const calulateCharLeft = (text: string, limit = 100): boolean => {
  return ((limit - text.length <= 50), (limit - text.length >= 10));
}

export const InputText = (props: CommentModel) => {
  return(
    <> 
      <textarea className="replyform-textarea"
        name="comment"
        value={props.text}
        placeholder="Insert your comment..." 
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        //check maxlength
        if (event.target.value.length <= props.maxlength) {
          //check type
          if (props.onValueChange) {
            props.onValueChange(event.target.value);
          }
        }
      }}
      />
      <span className=
      {calulateCharLeft(props.text, props.maxlength) ? "replyformflex-charcounter-alert" : "replyformflex-charcounter-error"}>
        {(props.maxlength - props.text.length)}
      </span>
    </>
  )
}
