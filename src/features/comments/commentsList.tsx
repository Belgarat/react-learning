import React from "react";
import { useAppSelector } from "../../app/hooks";
import "./commentsStyle.css";

export const CommentsList = () => {
  const comments = useAppSelector((state) => state.comments);

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
        <span>#Likes: {cmnt.attributes.likes}</span>
      </div>

      <div className="commentbox-spacer"></div>
    </div>
    /*<article className="post-excerpt" key={comment.id}>
      <p className="post-content">{comment.content.substring(0, 100)}</p>
    </article>*/
  ));

  return (
    <section className="commentboxflex">
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
