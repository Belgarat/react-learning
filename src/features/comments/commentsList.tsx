import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { commentDeleted } from "./commentsSlice";
import { Comment } from "./comment";

export const CommentsList = () => {
  const comments = useAppSelector((state) => state);
  const me = useAppSelector((state) => state).commentsReducer.me;
  const [body, setBody] = useState("");

  const dispatch = useAppDispatch();

  const onContentChanged = (e: any) => setBody(e.target.value);

  const onDeleteCommentClicked = (id: number) => {
    //console.log(id);
    if (id) {
      dispatch(commentDeleted({ id }));
    }
  };

  const renderedComments = comments.commentsReducer.comments.map(
    (cmnt: any) => (
      <Comment cmnt={cmnt} />
      /*
      <div key={`cmd-${cmnt.id}`}>
        

        <div className="commentbox-second-row">
          <div id={`cmnt_text-${cmnt.id}`} className="commentText">
            {cmnt.attributes.body && cmnt.attributes.body}
          </div>
          {
            //editable comment
            cmnt.attributes.author.data.id === me && (
              <div
                id={`cmnt_edit-${cmnt.id}`}
                className="replyformflex-first-row"
              >
                <textarea
                  className="replyform-textarea"
                  id="commentContent"
                  name="commentContent"
                  placeholder="Insert comment here..."
                  value={cmnt.attributes.body}
                  onChange={onContentChanged}
                />
              </div>
            )
          }
        </div>

        <div className="commentbox-second-row">
          <LikeIcon className="likebutton" />
          <span>#Likes: {cmnt.attributes.likes}</span>
          {cmnt.attributes.author.data.id === me && <button>Edit</button>}
          <TrashIcon
            className="trashbutton"
            title="Delete this comment"
            onClick={() => onDeleteCommentClicked(cmnt.id)}
          />
        </div>

        <div className="commentbox-spacer"></div>
      </div>*/
    )
  );

  return (
    <section className="commentboxflex">
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
