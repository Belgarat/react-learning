import React from "react";
import { CommentModel } from "../Interfaces"
import "./ReplyForm.css";

const calulateCharLeft = (text: string, limit: number): string => {
  const delta = limit - text.length;

  switch (true) {
    case (delta < 10):
      return 'replyformflex-charcounter-error';
    case (delta > 10 && delta < 50):
      return 'replyformflex-charcounter-alert';
    default:
      return 'replyformflex-charcounter';
  }
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
      <span className={calulateCharLeft(props.text, props.maxlength)}>
        {(props.maxlength - props.text.length)}
      </span>
    </>
  )
}
