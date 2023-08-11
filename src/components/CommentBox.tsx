import { Avatar } from "./Avatar"
import { Username } from "./Username"
import { CommentDate } from "./CommentDate"
import { CommentText } from "./CommentText"
import { LikeButton } from "./LikeButton"
import { LikeCounter } from "./LikeCounter"
import { ReplyFormToggle } from "./ReplyFormToggle"
import { ReplyListToggle } from "./ReplyListToggle"
import { CommentModel } from "../Interfaces";
import React from "react"

export const CommentBox = (comments: CommentModel[], ciaociao: React.EventHandler<any>) => {
  return(
    <>
    {
      comments.map((comment: CommentModel) => {
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