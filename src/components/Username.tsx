import { CommentModel } from "../Interfaces";

export const Username = (props: CommentModel) => {
  return(
    //console.log(props.userName)
    <>
    {props.name && <span>{props.name}</span>}
    </>
  )
}