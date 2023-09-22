import AvatarIcons from "./avatar_icons/img_avatar.png";
//import AvatarIcons from "../../backend/comment-system-backend/public/uploads/small_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png";
import "./Avatar.css"
import { AuthorModel } from "../Interfaces";

const handleClick = () => {
  console.log("Clicked on avatar icon");
}

export const Avatar = ({authors, authorId}: {authors: AuthorModel[], authorId: number}) => {

  const currentUser= authors.filter((author) => author.id === authorId);
  let avatarSrc = 'http://localhost:1337';
  const currentUserSrc=currentUser.at(0)?.attributes.avatar.data.attributes.formats.small.url;
  //console.log(currentUser);
  avatarSrc = avatarSrc+currentUserSrc;
  //console.log(avatarSrc);

  return(
    <>
    
    <img src={avatarSrc} alt="Avatar" className="avatar" onClick={handleClick}/>
    </>
  )
}