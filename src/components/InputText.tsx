import React from "react";

export interface CommentType {
  author: number;
  text: string;
  maxlength: number;
  onValueChange?: (newValue: string) => void;
}

/*const handleChange = (message: string) => {
  console.log(message);
}*/

export const InputText = (props: CommentType) => {
  return(
    <>
      <textarea
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
        //handleChange(event.target.value);
      }}
      />
    </>
  )
}
