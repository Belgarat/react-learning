import { CommentModel } from "../Interfaces";

export const CommentDate = (props: {date: Date|undefined}) => {
  console.log('CommentDate: ', props.date);
  return(
    <>
    {props.date && <span>{props.date.toString()}</span>}
    </>
  )
}