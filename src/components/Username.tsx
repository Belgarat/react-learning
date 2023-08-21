export const Username = (props: {name: string}) => {
  console.log('Username: ', props.name);
  return(
    <>
    {props.name && <span>{props.name}</span>}
    </>
  )
}