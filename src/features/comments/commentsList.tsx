import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { fetchPosts, selectAllPosts } from "./commentsSlice";
import { Comment } from "./comment";
import { CommentModel } from "../../Interfaces";

export const CommentsList = () => {
  //const comments = useAppSelector((state) => state); //old method
  const comments = useAppSelector(selectAllPosts); //new method with selector
  //const me = useAppSelector((state) => state).commentsReducer.me;
  const dispatch = useAppDispatch();

  const commentStatus = useAppSelector((state) => state.commentsReducer.status);
  //console.log(commentStatus);

  useEffect(() => {
    if (commentStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [commentStatus, dispatch]);

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
