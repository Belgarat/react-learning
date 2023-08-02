const handleClick = () => {
  console.log("Clicked on ADD button!");
}

export const ReplySaveButton = () => {
  return(
    <>
      <button onClick={handleClick}>Add</button>
    </>
  )
}