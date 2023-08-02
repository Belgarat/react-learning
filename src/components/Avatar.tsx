import img_avatar from "./img_avatar.png"
import "./Avatar.css"

const handleClick = () => {
  console.log("Clicked on avatar icon");
}

export const Avatar = () => {
  return(
    <>
    <img src={img_avatar} alt="Avatar" className="avatar" onClick={handleClick}/>
    </>
  )
}