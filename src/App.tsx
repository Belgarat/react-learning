import "./App.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { CommentModel, CommentSystemModel } from "./Interfaces";
import { useStore } from "./Store";

function App() {

  const comment = useState<CommentModel>();
  const {maxlength, comments, addComment, removeComment, editComment} = useStore();
  
  return (
    <>
      <div className="App">
        <ReplyForm comment={comment} maxlength={maxlength} comments={comments} addComment={addComment} removeComment={removeComment} editComment={editComment}/>
        <br/><br/>
        Comments
        <CommentBox maxlength={maxlength} comments={comments} addComment={addComment} removeComment={removeComment} editComment={editComment}/>
      </div>
    </>
  );
}

export default App;
