import Greeter from "./components/Greeter";
import {
  InputUsername4,
  UsernameType
} from "./components/InputUsername";
//import "./App.css";
//import "./style.css";
import "./typography.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { CommentModel, CommentSystemModel } from "./Interfaces";

function App() {

  const [username, setUsername] = useState<UsernameType>({
    name: "User",
    maxlength: 50
  });

  const setUsernameObject = (nameChanged: string) => {
    setUsername({ name: nameChanged, maxlength: 50 });
  };

  const [usernameObj, setUsernameObj] = useState<UsernameType>({
    name: "Utente",
    maxlength: 20
  });
  const setUsernameObjName = (nameChanged: string) => {
    setUsernameObj({
      name: nameChanged,
      maxlength: usernameObj.maxlength,
      onUsernameObjChange: setUsernameObject
    });
  };

  const updateComment = (textChange: string) => {
    setComment({...comment, body: textChange});
  };

  const [comment, setComment] = useState<CommentModel>({
    name:"1",
    body: "",
    maxlength: 100
  })

  const addComment = () => {
    console.log("ADD clicked", comment);
  };

  const cancelComment = () => {
    setComment({...comment, body: ""});
  };

  const [comments, setComments] = useState<CommentModel[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(res => setComments(res))
  }, [])

  const replayEvents: CommentSystemModel = {
    clickAdd: addComment,
    clickCancel: cancelComment,
    onValueChange: updateComment
  }

  return (
    <>
      <div className="App">
        
        <ReplyForm comment={comment} replayEvents={replayEvents}/>
        <br/><br/>
        Comments
        <CommentBox comments={comments}/>
      </div>
    </>
  );
}

export default App;
