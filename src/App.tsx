import "./App.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
//import { CommentModel, CommentSystemModel } from "./Interfaces";
import { useStore } from "./Store";

function App() {

  //const comment = useState<CommentModel>();
  const {maxlength, comment, comments, updateBodyValue, addComment, removeComment, editComment} = useStore();

  //console.log(maxlength, comment, comments, addComment, removeComment, editComment);
  
  return (
    <>
      <div className="App">
        <ReplyForm comment={comment} updateBodyValue={updateBodyValue} maxlength={maxlength} comments={comments}/>
        <br/><br/>
        Comments
        <CommentBox comments={comments} maxlength={maxlength} comment={comment} />
      </div>
    </>
  );
}

export default App;
