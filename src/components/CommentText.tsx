import { CommentModel } from "../Interfaces";

export const CommentText = (props: {body: string}) => {
  console.log('CommentText: ', props)
  return(
    <>
    {props.body && <div>{(props.body).replace(/\n/g, "<br />")}</div>}
    </>
  )
}