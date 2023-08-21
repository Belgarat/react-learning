import { CommentModel } from "../Interfaces";

export const CommentText = (props: {body: string}) => {
  console.log('CommentText: ', props)
  return(
    <>
    {props.body && <span>{props.body}</span>}
    </>
  )
}