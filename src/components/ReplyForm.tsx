import { Avatar } from "./Avatar"
import { InputText, CommentType } from "./InputText"
import { ReplySaveButton } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"

export const ReplyForm = (props: CommentType) => {
  return(
    <>
      <div>
        <div>
          <Avatar/>
          <InputText {...props}/>
        </div>
        <div>
          <ReplyCancelButton/>
          <ReplySaveButton/>
        </div>
      </div>
    </>
  )
}