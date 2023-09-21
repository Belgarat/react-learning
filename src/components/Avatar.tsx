import AvatarIcons from "./avatar_icons/img_avatar.png";
import "./Avatar.css"

const handleClick = () => {
  console.log("Clicked on avatar icon");
}

export const Avatar = () => {
  return(
    <>
    
    <img src={AvatarIcons} alt="Avatar" className="avatar" onClick={handleClick}/>
    </>
  )
}