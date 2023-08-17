import Greeter from "./components/Greeter";
import {
  InputUsername4,
  UsernameType
} from "./components/InputUsername";
//import "./App.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { CommentModel, CommentSystemModel } from "./Interfaces";
import { useStore } from "./Store";

function App() {

  const comment = useState<CommentModel>();
  const {maxlength, comments, addComment, removeComment, editComment} = useStore();
  
  /*const [username, setUsername] = useState<UsernameType>({
    name: "User",
    maxlength: 50
  });*/

  /*const setUsernameObject = (nameChanged: string) => {
    setUsername({ name: nameChanged, maxlength: 50 });
  };*/

  /*const [usernameObj, setUsernameObj] = useState<UsernameType>({
    name: "Utente",
    maxlength: 20
  });*/
  /*const setUsernameObjName = (nameChanged: string) => {
    setUsernameObj({
      name: nameChanged,
      maxlength: usernameObj.maxlength,
      onUsernameObjChange: setUsernameObject
    });
  };*/

  /*const updateComment = (textChange: string) => {
    setComment({...comment, body: textChange});
  };*/

  /*const [comment, setComment] = useState<CommentModel>({
    name:"1",
    body: "",
  })*/

  /*const addComment = () => {
    console.log("ADD clicked", comment);
  };*/

  /*const cancelComment = () => {
    setComment({...comment, body: ""});
  };*/

  //const [comments, setComments] = useState<CommentModel[]>([]);

  /*useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(res => setComment(res))
  }, [])*/

  /*const replayEvents: CommentSystemModel = {
    clickAdd: addComment,
    clickCancel: cancelComment,
    onValueChange: updateComment
  }*/

  /*function useTraceUpdate(props:any) {
    const prev = useRef(props);
    useEffect(() => {
      const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
        if (prev.current[k] !== v) {
          ps[k] = [prev.current[k], v];
        }
        return ps;
      }, {});
      if (Object.keys(changedProps).length > 0) {
        console.log('Changed props:', changedProps);
      }
      prev.current = props;
    });
  }
  useTraceUpdate(comment);*/
  /*return (
    <>
      <div className="App">
        <ReplyForm comment={comment} replayEvents={replayEvents}/>
        <br/><br/>
        Comments
        <CommentBox comments={comments}/>
      </div>
    </>
  );*/
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
