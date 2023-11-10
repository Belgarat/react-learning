import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { fetchPosts, selectAllPosts, selectStatus } from "./commentsSlice";
import { Comment } from "./comment";
import { CommentModel } from "../../Interfaces";

export const CommentsList = () => {
  const dispatch = useAppDispatch();
  //const comments = useAppSelector((state) => state); //old method
  const comments = useAppSelector(selectAllPosts); //new method with selector
  //console.log(comments);
  //const me = useAppSelector((state) => state).commentsReducer.me;
  //const commentStatus = useAppSelector((state) => state.commentsReducer.status);
  const commentStatus = useAppSelector(selectStatus);
  //console.log(commentStatus);

  useEffect(() => {
    if (commentStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [commentStatus, dispatch]);

  //const renderedComments = comments.commentsReducer.comments.map(
  const renderedComments = comments.map((cmnt: CommentModel) => (
    <Comment {...cmnt} />
  ));

  return (
    <section className="commentboxflex">
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
