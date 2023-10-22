import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./commentsStyle.css";
import { ReactComponent as LikeIcon } from "./like-svgrepo-com.svg";
import { ReactComponent as TrashIcon } from "./icons8-trash.svg";
import { commentDeleted } from "./commentsSlice";

export const CommentsList = () => {
  const comments = useAppSelector((state) => state.comments);

  const dispatch = useAppDispatch();

  const onDeleteCommentClicked = (id: number) => {
    //console.log(id);
    if (id) {
      dispatch(commentDeleted({ id }));
    }
  };

  const renderedComments = comments.map((cmnt: any) => (
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
        <div className="commentText">
          {cmnt.attributes.body && cmnt.attributes.body}
        </div>
      </div>

      <div className="commentbox-second-row">
        <LikeIcon className="likebutton" />
        <span>#Likes: {cmnt.attributes.likes}</span>
        <TrashIcon
          className="trashbutton"
          title="Delete this comment"
          onClick={() => onDeleteCommentClicked(cmnt.id)}
        />
      </div>

      <div className="commentbox-spacer"></div>
    </div>
  ));

  return (
    <section className="commentboxflex">
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
