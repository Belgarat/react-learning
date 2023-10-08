import { Avatar } from "./Avatar"
import { CommentModel, AuthorModel } from "../Interfaces";
import "./CommentBox.css";
import { ReactComponent as LikeIcon } from '../like-svgrepo-com.svg';
import { ReactComponent as TrashIcon } from '../icons8-trash.svg';



  export const CommentBox = ({authors, maxlength, updateBodyValue, comments, removeComment, likeComment}: {authors: AuthorModel[], maxlength: number, updateBodyValue?: any, removeComment?: any, likeComment?: any, comments: CommentModel[]}) => {
    //console.log("Comment Box: ",authors, comments);
    return(
    <>
    <div className="commentboxflex">Comments
    {
      comments.map((cmnt: CommentModel, idx: number) => {
        return (
          <div key={`cmd-${idx}`}>
            <div className="commentbox-first-row">
              <Avatar author={authors.find((author) => author.id === cmnt.attributes.author.data.id)}/>
              {cmnt.attributes.author.data.attributes.name && <span>{cmnt.attributes.author.data.attributes.name}</span>}
              {cmnt.attributes.createdAt && <span>{cmnt.attributes.createdAt.substring(0, 10)}</span>}
            </div>
            <div className="commentbox-second-row">
              <div className="commentText" 
                contentEditable={cmnt.attributes.author.data.id === 1 ? 'true' : 'false'}
                onInput={(event: React.ChangeEvent<HTMLDivElement>) => {
                  //check maxlength
                  console.log(event);
                  if (maxlength && event.target.innerHTML.length <= maxlength) {
                      updateBodyValue(event.target.innerHTML);
                      
                  }
                }}
              >
                {cmnt.attributes.body && cmnt.attributes.body}
              </div>
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