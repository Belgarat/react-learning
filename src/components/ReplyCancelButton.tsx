import { CommentModel } from "../Interfaces";

export const ReplyCancelButton = (props: CommentModel) => {
  return(
    <>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if(props.clickCancel && props.onValueChange){
          props.onValueChange("");
        }
      }}>Cancel</button>
    </>
  )
}