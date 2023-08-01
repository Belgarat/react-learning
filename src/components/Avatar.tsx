import img_avatar from "./img_avatar.png"
import "./Avatar.css"

export const Avatar = () => {
  return(
    <>
    <img src={img_avatar} alt="Avatar" className="avatar"/>
    </>
  )
}