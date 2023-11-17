import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { ReactComponent as EditIcon } from "./edit-button.svg";
import { commentDeleted, commentEdited, commentLiked } from "./commentsSlice";
import { CommentModel } from "../../Interfaces";

export const Comment = (cmnt: CommentModel) => {
  //const me = useAppSelector((state) => state).commentsReducer.me;
  const me = useAppSelector((state) => state).comments.me;
  const [body, setBody] = useState(cmnt.attributes.body);
  const [visibleEditing, setVisibleEditing] = useState(false);

  //console.log("Me: " + me);
  //console.log("cmnt: " + cmnt.attributes.author.data.id);

  const dispatch = useAppDispatch();

  const onContentChanged = (e: any) => setBody(e.target.value);
  const onEditingPressed = () => {
    setVisibleEditing((visibleEditing) => !visibleEditing);
  };

  const onLikePressed = () => {
    if (cmnt.id) {
      //const idToDelete = cmnt.id;
      dispatch(
        commentLiked({
          id: cmnt.id,
        })
      );
    }
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
      {/*<div key={`cmntkey-${cmnt.id}`} id={`cmntid-${cmnt.id}`}>*/}
      <div key={"cmntkey-" + cmnt.id} id={"cmntid-" + cmnt.id}>
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
            className={visibleEditing ? "invisible" : "visible"}
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
                    ? "replyformflex-first-row visible"
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
          <LikeIcon
            className="likebutton"
            title="Like this comment"
            onClick={onLikePressed}
          />
          <span>#Likes: {cmnt.attributes.likes}</span>
          {cmnt.attributes.author.data.id === me && (
            <EditIcon
              onClick={onEditingPressed}
              className="editbutton"
              title="Edit this comment"
            />
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
