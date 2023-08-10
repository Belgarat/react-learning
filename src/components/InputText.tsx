import React from "react";
import { CommentModel } from "../Interfaces"
import { CharCounter } from "./CharCounter";


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
      <CharCounter {...props}/>
    </>
  )
}
