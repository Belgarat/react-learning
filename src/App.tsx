import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { useStore } from "./Store";

function App() {

  const {maxlength, comment, comments, updateBodyValue, addComment, removeComment, editComment} = useStore();
  
  return (
    <>
      <div className="App">
        <ReplyForm comment={comment} updateBodyValue={updateBodyValue} addComment={addComment} maxlength={maxlength}/>
        <br/><br/>
        <CommentBox comments={comments} addComment={addComment} maxlength={maxlength} comment={comment} />
      </div>
    </>
  );
}

export default App;
