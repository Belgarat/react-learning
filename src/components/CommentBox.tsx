import { Avatar } from "./Avatar"
import { Username } from "./Username"
import { CommentDate } from "./CommentDate"
import { CommentText } from "./CommentText"
import { LikeButton } from "./LikeButton"
import { LikeCounter } from "./LikeCounter"
import { ReplyFormToggle } from "./ReplyFormToggle"
import { ReplyListToggle } from "./ReplyListToggle"
import { CommentModel, CommentSystemModel } from "../Interfaces";

  export const CommentBox = ({comments}: CommentSystemModel) => {
  return(
    <>
    {
      comments.map((cmnt: CommentModel) => {
        console.log(cmnt);
        return <>
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
      })
    }
    </>
  )
}