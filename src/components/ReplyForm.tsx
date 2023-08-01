import { Avatar } from "./Avatar"
import { InputText } from "./InputText"
import { CharCounter } from "./CharCounter"
import { ReplySaveButton } from "./ReplySaveButton"
import { ReplyCancelButton } from "./ReplyCancelButton"

export const ReplyForm = () => {
  return(
    <>
      <div>
        <div>
          <Avatar/>
          <InputText/>
        </div>
        <div>
          <ReplyCancelButton/>
          <ReplySaveButton/>
        </div>
      </div>
    </>
  )
}