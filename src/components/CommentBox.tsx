import { Avatar } from "./Avatar"
import { CommentModel, CommentSystemModel } from "../Interfaces";
import "./CommentBox.css";
import { ReactComponent as LikeIcon } from '../like-svgrepo-com.svg';
import { ReactComponent as TrashIcon } from '../icons8-trash.svg';

  export const CommentBox = ({authors, comments, removeComment, likeComment}: CommentSystemModel) => {
    //console.log("Comment Box: ",authors, comments);
    return(
    <>
    <div className="commentboxflex">Comments
    {
      comments.map((cmnt: CommentModel, idx: number) => {
        return (
          <div key={`cmd-${idx}`}>
            <div className="commentbox-first-row">
              <Avatar authors={authors} authorId={cmnt.attributes.author.data.id}/>
              {cmnt.attributes.author.data.attributes.name && <span>{cmnt.attributes.author.data.attributes.name}</span>}
              {cmnt.attributes.createdAt && <span>{cmnt.attributes.createdAt.substring(0, 10)}</span>}
            </div>
            <div className="commentbox-second-row">
              {cmnt.attributes.body && <div className="commentText">{cmnt.attributes.body}</div>}
            </div>
            <div className="commentbox-second-row">
              <LikeIcon className='likebutton' onClick={() => likeComment && likeComment(cmnt.id)}/>
              <span>#Likes: {cmnt.attributes.likes}</span>
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