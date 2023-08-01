import { Avatar } from "./Avatar"
import { Username } from "./Username"
import { CommentDate } from "./CommentDate"
import { CommentText } from "./CommentText"
import { LikeButton } from "./LikeButton"
import { LikeCounter } from "./LikeCounter"
import { ReplyFormToggle } from "./ReplyFormToggle"
import { ReplyListToggle } from "./ReplyListToggle"

export const CommentBox = () => {
  return(
    <>
    <div>
      <Avatar/>
    </div>
    <div>
      <div>
        <Username/>
        <CommentDate/>
      </div>
      <div>
        <CommentText/>
      </div>
      <div>
        <LikeButton/>
        <LikeCounter/>
        <ReplyFormToggle/>
      </div>
      <div>
        <ReplyListToggle/>
      </div>
    </div>
    </>
  )
}