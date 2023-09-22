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
    console.log(comments);
  },[]);

  useEffect(() => {
    authors: fetchAuthors().then((authors) => initAuthors(authors));
    console.log(authors);
  },[]);

  console.log(comments,authors);

  return (
    <>
    <div className="App">
      <ReplyForm comment={comment} updateBodyValue={updateBodyValue} addComment={addComment} maxlength={maxlength}/>
      <br/><br/>
      <CommentBox authors={authors} initComments={initComments} initAuthors={initAuthors} comments={comments} addComment={addComment} maxlength={maxlength} comment={comment} likeComment={likeComment} removeComment={removeComment}/>
    </div>
    </>
  );
}

export default App;
