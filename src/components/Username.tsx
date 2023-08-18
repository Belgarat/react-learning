export const Username = (props: {userName: string}) => {
  return(
    <>
    {props.userName && <span>{props.userName}</span>}
    </>
  )
}