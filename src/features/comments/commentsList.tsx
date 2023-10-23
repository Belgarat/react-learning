import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { commentDeleted } from "./commentsSlice";
import { Comment } from "./comment";
import { CommentModel } from "../../Interfaces";

export const CommentsList = () => {
  const comments = useAppSelector((state) => state);
  //const me = useAppSelector((state) => state).commentsReducer.me;
  //const [body, setBody] = useState("");

  const dispatch = useAppDispatch();

  //const onContentChanged = (e: any) => setBody(e.target.value);

  /*const onDeleteCommentClicked = (id: number) => {
    //console.log(id);
    if (id) {
      dispatch(commentDeleted({ id }));
    }
  };*/

  const renderedComments = comments.commentsReducer.comments.map(
    (cmnt: CommentModel) => <Comment {...cmnt} />
  );

  return (
    <section className="commentboxflex">
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
