import { CommentModel } from "../Interfaces";

export const CommentText = ({...body}) => {
  return(
    <>
    {body && <span>body</span>}
    </>
  )
}