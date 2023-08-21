import { CommentModel } from "../Interfaces";

export const CommentDate = (props: CommentModel) => {
  return(
    <>
    {props.date && <span>{props.date.toString()}</span>}
    </>
  )
}