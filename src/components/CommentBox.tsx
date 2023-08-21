import { Avatar } from "./Avatar"
import { Username } from "./Username"
import { CommentDate } from "./CommentDate"
import { CommentText } from "./CommentText"
import { LikeButton } from "./LikeButton"
import { LikeCounter } from "./LikeCounter"
import { ReplyFormToggle } from "./ReplyFormToggle"
import { ReplyListToggle } from "./ReplyListToggle"
import { CommentModel, CommentSystemModel } from "../Interfaces";

  export const CommentBox = ({comments, removeComment}: CommentSystemModel) => {
  return(
    <>
    {
      //test if comments lenght is > 0
        comments.map((cmnt: CommentModel, idx: number) => {
          //console.log(typeof(cmnt.name));
          return (<div key={`'cmd-${idx}`}>
                  <div>
                    <Avatar/>
                  </div>
                  <div>
                    <div>
                      <Username {...cmnt}/>
                      <CommentDate {...cmnt}/>
                    </div>
                    <div>
                      <CommentText {...cmnt}/>
                    </div>
                    <div>
                      <LikeButton/>
                      <LikeCounter/>
                      <ReplyFormToggle/>
                    </div>
                    <div>
                      <ReplyListToggle/>
                    </div>
                    {<button onClick={() => removeComment && removeComment(cmnt.id)}>Del</button>}
                  </div>
                </div>)
        })
    }
    </>
  )
}