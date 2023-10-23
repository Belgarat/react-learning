import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { commentDeleted } from "./commentsSlice";

export const Comment = (cmnt: any) => {
  //const comments = useAppSelector((state) => state);
  const me = useAppSelector((state) => state).commentsReducer.me;
  const [body, setBody] = useState(cmnt.attributes.body);

  const dispatch = useAppDispatch();

  const onContentChanged = (e: any) => setBody(e.target.value);

  const onDeleteCommentClicked = (id: number) => {
    //console.log(id);
    if (id) {
      dispatch(commentDeleted({ id }));
    }
  };
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
        <div id={`cmnt_text-${cmnt.id}`} className="commentText">
          {body}
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
                value={body}
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
    </div>
  </>;
};
