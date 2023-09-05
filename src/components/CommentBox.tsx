import { Avatar } from "./Avatar"
import { Username } from "./Username"
import { CommentDate } from "./CommentDate"
import { CommentText } from "./CommentText"
import { LikeButton } from "./LikeButton"
import { LikeCounter } from "./LikeCounter"
import { ReplyFormToggle } from "./ReplyFormToggle"
import { ReplyListToggle } from "./ReplyListToggle"
import { CommentModel, CommentSystemModel } from "../Interfaces";
import "./CommentBox.css";
import { ReactComponent as LikeIcon } from '../like-svgrepo-com.svg';

  export const CommentBox = ({comments, removeComment, likeComment}: CommentSystemModel) => {
  return(
    <>
    <div className="commentboxflex">Comments
    {
        comments.map((cmnt: CommentModel, idx: number) => {
          return (<div key={`'cmd-${idx}`}>
                    <div className="commentbox-first-row">
                      <Avatar/>
                      <Username name={cmnt.name}/>
                      <CommentDate date={cmnt.date}/>
                    </div>
                    <div className="commentbox-second-row">
                      <CommentText body={cmnt.body}/>
                    </div>
                    <div className="commentbox-second-row">
                      <LikeIcon className='likebutton' onClick={() => likeComment && likeComment(cmnt.id)}/>
                      <LikeCounter/>
                      <ReplyFormToggle/>
                      {<button onClick={() => removeComment && removeComment(cmnt.id)}>Del</button>}
                    </div>
                    <div className="commentbox-second-row">
                      <ReplyListToggle/>
                    </div>
                    <div className="commentbox-spacer"></div>
                  </div>)
        })
    }
    </div>
    </>
  )
}