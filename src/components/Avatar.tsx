import AvatarIcons from "./avatar_icons/img_avatar.png";
import "./Avatar.css"

const handleClick = () => {
  console.log("Clicked on avatar icon");
}

export const Avatar = ({icon}: {icon: string}) => {
  return(
    <>
    <AvatarIcons/>
    <img src={icon} alt="Avatar" className="avatar" onClick={handleClick}/>
    </>
  )
}