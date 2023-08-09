import React from "react";
import { CommentModel } from "../Interfaces"
import "./ReplyForm.css";

const calulateCharLeft = (props: CommentModel) => {
  var output = '';
  if((props.maxlength - props.text.length) <= 50 && (props.maxlength - props.text.length) > 10){
    var output = output+'replyformflex-charcounter-alert';
  }
  else if((props.maxlength - props.text.length) <= 10){
    var output = output+'replyformflex-charcounter-error';
  }
  //var output = output+'">'+(props.maxlength - props.text.length)+'</span>';
  console.log(output);
  return output;
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
      {((props.maxlength - props.text.length) <= 50 && (props.maxlength - props.text.length) >= 10) ? "replyformflex-charcounter-alert" : "replyformflex-charcounter-error"}>
        {(props.maxlength - props.text.length)}
      </span>
    </>
  )
}
