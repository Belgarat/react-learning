import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CommentModel } from "../Interfaces"
import { ReplySaveButton  } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"

export const ReplyForm = (props: CommentModel) => {
  return(
    <>
      <div>
        <div>
          <Avatar/>
          <InputText {...props}/>
        </div>
        <div>
          <ReplyCancelButton {...props}/>
          <ReplySaveButton {...props}/>
        </div>
      </div>
    </>
  )
}