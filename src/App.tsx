import { useEffect } from "react";
import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { useStore, fetchComments, fetchAuthors } from "./Store";

function App() {

  const {maxlength, comment, comments, updateBodyValue, addComment, removeComment, likeComment} = useStore();
  
  useEffect(() => {
    fetchComments();
  },[fetchComments]);

  useEffect(() => {
    fetchAuthors();
  },[fetchAuthors]);

  console.log(comments);

  return (
    <>
    <div className="App">
      <ReplyForm comment={comment} updateBodyValue={updateBodyValue} addComment={addComment} maxlength={maxlength}/>
      <br/><br/>
      <CommentBox comments={comments} addComment={addComment} maxlength={maxlength} comment={comment} likeComment={likeComment} removeComment={removeComment}/>
    </div>
    </>
  );
}

export default App;
