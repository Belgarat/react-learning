import Greeter from "./components/Greeter";
import {
  InputUsername4,
  UsernameType
} from "./components/InputUsername";
//import "./App.css";
import "./style.css";
import "./typography.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { CommentModel, CommentListModel } from "./Interfaces";

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
    setComment({...comment, text: textChange});
  };

  const [comment, setComment] = useState<CommentModel>({
    author:1,
    text: "",
    maxlength: 100
  })

  const addComment = () => {
    console.log("ADD clicked", comment);
  };

  const cancelComment = () => {
    setComment({...comment, text: ""});
  };

  return (
    <>
      <div className="App">
        <InputUsername4
          {...usernameObj}
          onUsernameObjChange={setUsernameObjName}
        />
        <Greeter value={usernameObj.name} fontSize="5vw" />
        <br/><br/>
        <ReplyForm {...comment} onValueChange={updateComment} clickAdd={addComment} clickCancel={cancelComment}/>
        <br/><br/>
        Comments
        <CommentBox/>
      </div>
    </>
  );
}

export default App;
