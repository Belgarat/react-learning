import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import {
  fetchComments,
  selectAllComments,
  selectStatus,
} from "./commentsSlice";
import { Comment } from "./comment";
import { CommentModel } from "../../Interfaces";

export const CommentsList = () => {
  const dispatch = useAppDispatch();
  //const comments = useAppSelector((state) => state.comments.comments); //old method
  const comments = useAppSelector(selectAllComments); //new method with selector
  //console.log(comments);
  //const me = useAppSelector((state) => state).commentsReducer.me;
  //const commentStatus = useAppSelector((state) => state.commentsReducer.status);
  const commentStatus = useAppSelector(selectStatus);
  //console.log(commentStatus);

  useEffect(() => {
    if (commentStatus === "idle") {
      //console.log("first loading");
      dispatch(fetchComments());
      //console.log(comments);
    }
  }, [commentStatus, dispatch]);

  //const renderedComments = comments.commentsReducer.comments.map(
  console.log(comments);
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
