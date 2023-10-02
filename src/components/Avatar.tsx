import AvatarIcons from "./avatar_icons/img_avatar.png";
//import AvatarIcons from "../../backend/comment-system-backend/public/uploads/small_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png";
import "./Avatar.css"
import { AuthorModel } from "../Interfaces";

const handleClick = () => {
  console.log("Clicked on avatar icon");
}

export const Avatar = ({author}: {author: AuthorModel|undefined}) => {
  //console.log("Avatar - Authors: ", authors);
  //let currentUser= authors;
  //console.log("Avatar - Current User: ", author);
  let avatarSrc = 'http://localhost:1337';
  if(author){
    let currentUserSrc=author.attributes.avatar.data.attributes.formats.thumbnail?.url;
    avatarSrc = avatarSrc+currentUserSrc;
  }else{
    //default icon
    avatarSrc = avatarSrc+"uploads/small_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png";
  }
  
  //
  //console.log(avatarSrc);

  return(
    <>
    
    <img src={avatarSrc} alt="Avatar" className="avatar" onClick={handleClick}/>
    </>
  )
}