export const CommentDate = (props:{date: string}) => {
  return(
    <>
    {props.date && <span>{props.date}</span>}
    </>
  )
}