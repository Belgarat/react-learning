const handleClick = () => {
  console.log("Clicked on CANCEL button");
}

export const ReplyCancelButton = () => {
  return(
    <>
      <button onClick={handleClick}>Cancel</button>
    </>
  )
}