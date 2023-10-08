import { useEffect } from "react";
import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { useStore, fetchComments, fetchAuthors } from "./Store";

function App() {

  const {maxlength, authors, comment, comments, updateBodyValue, addComment, removeComment, likeComment} = useStore();
  const initComments = useStore(state => state.initComments);
  const initAuthors = useStore(state => state.initAuthors);
  
  useEffect(() => {
    fetchComments().then((comments) => initComments(comments));
    //console.log("Comments: ",comments);
  },[]);

  useEffect(() => {
    fetchAuthors().then((authors) => initAuthors(authors));
    //console.log("Authors: ",authors);
  },[]);

  return (
    <>
    <div className="App">
      <ReplyForm authors={authors} comment={comment} updateBodyValue={updateBodyValue} addComment={addComment} maxlength={maxlength}/>
      <br/><br/>
      <CommentBox authors={authors} updateBodyValue={updateBodyValue} comments={comments} maxlength={maxlength} likeComment={likeComment} removeComment={removeComment}/>
    </div>
    </>
  );
}

export default App;
