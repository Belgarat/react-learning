import React from "react"
import { CommentModel } from "../Interfaces"

export const ReplySaveButton = (props: CommentModel) => {
  return(
    <>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if(props.clickAdd){
          props.clickAdd(event);
        }
      }}>Add</button>
    </>
  )
}