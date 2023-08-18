export const CommentText = (props: {body: string}) => {
  return(
    <>
      {props.body && <span>{props.body}</span>}
    </>
  )
}