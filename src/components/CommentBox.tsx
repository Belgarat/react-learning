import { Avatar } from "./Avatar"
import { CommentModel, CommentSystemModel } from "../Interfaces";
import "./CommentBox.css";
import { ReactComponent as LikeIcon } from '../like-svgrepo-com.svg';
import { ReactComponent as TrashIcon } from '../icons8-trash.svg';

  export const CommentBox = ({comments, removeComment, likeComment}: CommentSystemModel) => {
    return(
    <>
    <div className="commentboxflex">Comments
    {
      comments.map((cmnt: CommentModel, idx: number) => {
        return (
          <div key={`cmd-${idx}`}>
            <div className="commentbox-first-row">
              <Avatar icon={cmnt.avatar}/>
              {cmnt.name && <span>{cmnt.name}</span>}
              {cmnt.date && <span>{cmnt.date.toString()}</span>}
            </div>
            <div className="commentbox-second-row">
              {
              //cmnt.body && <div>{(cmnt.body).replace(/\n/g, "<br />")}</div>
              cmnt.body && <div className="commentText">{cmnt.body}</div>
              }
            </div>
            <div className="commentbox-second-row">
              <LikeIcon className='likebutton' onClick={() => likeComment && likeComment(cmnt.id)}/>
              <span>#Likes: {cmnt.likes}</span>
              {<TrashIcon className="trashbutton" title="Delete this comment" onClick={() => removeComment && removeComment(cmnt.id)}/>}
            </div>
            <div className="commentbox-spacer"></div>
          </div>
        )
      })
    }
    </div>
    </>
  )}