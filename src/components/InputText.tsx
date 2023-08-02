import React from "react";

const handleChange = (message: string) => {
  console.log(message);
}

export const InputText = () => {
  return(
    <>
      <textarea
      placeholder="Insert your comment..." 
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        /*if (props.onContentChange) {
          props.onContentChange(event.target.value);
        }*/
        handleChange(event.target.value);
      }}
      >

      </textarea>
    </>
  )
}