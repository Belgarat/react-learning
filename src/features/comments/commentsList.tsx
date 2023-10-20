import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export const CommentsList = () => {
  const comments = useAppSelector((state) => state.comments);

  const renderedComments = comments.map((cmnt: any) => (
    <div key={`cmd-${cmnt.id}`}>
      <div className="commentbox-second-row">
        <div className="commentText">
          {cmnt.attributes.body && cmnt.attributes.body}
        </div>
      </div>

      <div className="commentbox-spacer"></div>
    </div>
    /*<article className="post-excerpt" key={comment.id}>
      <p className="post-content">{comment.content.substring(0, 100)}</p>
    </article>*/
  ));

  return (
    <section>
      <h2>Comments</h2>
      {renderedComments}
    </section>
  );
};
