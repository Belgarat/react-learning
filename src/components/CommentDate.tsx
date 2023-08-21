import { CommentModel } from "../Interfaces";

export const CommentDate = ({...date}) => {
  return(
    <>
    {date && <span>{date.toString()}</span>}
    </>
  )
}