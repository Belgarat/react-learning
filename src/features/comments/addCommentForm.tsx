import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { commentAdded } from "./commentsSlice";

export const AddCommentForm = () => {
  const [body, setBody] = useState("");

  const me = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onContentChanged = (e: any) => setBody(e.target.value);
  const resetBody = () => setBody("");

  const onSaveCommentClicked = () => {
    if (body) {
      dispatch(
        commentAdded({
          id: 5,
          attributes: {
            body,
            likes: 0,
            author: {
              data: {
                id: me,
                attributes: {
                  name: "John Smith",
                  email: "js@js.test",
                  createdAt: "2023-09-18T12:13:10.947Z",
                  updatedAt: "2023-09-18T12:13:11.934Z",
                  publishedAt: "2023-09-18T12:13:11.932Z",
                },
              },
            },
          },
        })
      );
      setBody("");
    }
  };

  return (
    <section className="replyformflex">
      <form>
        <div className="replyformflex-first-row">
          <textarea
            className="replyform-textarea"
            id="commentContent"
            name="commentContent"
            placeholder="Insert comment here..."
            value={body}
            onChange={onContentChanged}
          />
        </div>
        <div className="replyformflex-last-row">
          <button
            className="replyformflex-button-cancel"
            type="button"
            onClick={resetBody}
          >
            Cancel
          </button>
          <button
            className="replyformflex-button-add"
            type="button"
            onClick={onSaveCommentClicked}
          >
            Save Comment
          </button>
        </div>
      </form>
    </section>
  );
};
