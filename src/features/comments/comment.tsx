import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { commentDeleted, commentEdited } from "./commentsSlice";
import { CommentModel } from "../../Interfaces";

export const Comment = (cmnt: CommentModel) => {
  //export const Comment: React.FC<CommentModel> = (cmnt: CommentModel) => {
  //console.log(cmnt);
  //const comments = useAppSelector((state) => state);
  const me = useAppSelector((state) => state).commentsReducer.me;
  const [body, setBody] = useState(cmnt.attributes.body);
  const [visibleEditing, setVisibleEditing] = useState(false);

  const dispatch = useAppDispatch();

  const onContentChanged = (e: any) => setBody(e.target.value);
  const onEditingPressed = () => {
    setVisibleEditing((visibleEditing) => !visibleEditing);
  };

  const onDeleteCommentClicked = () => {
    //console.log(cmnt);
    if (cmnt.id) {
      //const idToDelete = cmnt.id;
      dispatch(
        commentDeleted({
          id: cmnt.id,
        })
      );
    }
  };
  const onEditCommentClicked = () => {
    if (body) {
      dispatch(
        commentEdited({
          id: cmnt.id,
          attributes: {
            body,
          },
        })
      );
    }
    //console.log(body);
    setVisibleEditing((visibleEditing) => !visibleEditing);
  };

  return (
    <>
      <div key={`cmd-${cmnt.id}`}>
        <div className="commentbox-first-row">
          {/*cmnt.attributes.author.data.attributes.name && (
        <span>{cmnt.attributes.author.data.attributes.name}</span>
      )*/}
          {/*cmnt.attributes.createdAt && (
        <span>{cmnt.attributes.createdAt.substring(0, 10)}</span>
      )*/}
        </div>

        <div className="commentbox-second-row">
          <div
            id={`cmnt_text-${cmnt.id}`}
            className={visibleEditing ? "invisibile" : "visible"}
          >
            <span className="commentText">{body}</span>
          </div>
          {
            //editable comment
            cmnt.attributes.author.data.id === me && (
              <div
                id={`cmnt_edit-${cmnt.id}`}
                //className="replyformflex-first-row"
                className={
                  visibleEditing
                    ? "replyformflex-first-row visibile"
                    : "replyformflex-first-row invisible"
                }
              >
                <textarea
                  className="replyform-textarea"
                  id="commentContent"
                  name="commentContent"
                  placeholder="Insert comment here..."
                  value={body}
                  onChange={onContentChanged}
                />
                <button
                  className="replyformflex-button-add"
                  type="button"
                  onClick={onEditCommentClicked}
                >
                  Save Comment
                </button>
              </div>
            )
          }
        </div>

        <div className="commentbox-second-row">
          <LikeIcon className="likebutton" />
          <span>#Likes: {cmnt.attributes.likes}</span>
          {cmnt.attributes.author.data.id === me && (
            <button onClick={onEditingPressed}>Edit this comment</button>
          )}
          {cmnt.attributes.author.data.id === me && (
            <TrashIcon
              className="trashbutton"
              title="Delete this comment"
              onClick={onDeleteCommentClicked}
            />
          )}
        </div>

        <div className="commentbox-spacer"></div>
      </div>
    </>
  );
};
