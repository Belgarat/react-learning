import { CommentModel } from "../Interfaces";

export const CommentText = (props: CommentModel) => {
  return(
    <>
      <span>{props.body}</span>
    </>
  )
}