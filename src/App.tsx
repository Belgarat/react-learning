import Greeter from "./components/Greeter";
import {
  InputUsername4,
  UsernameType
} from "./components/InputUsername";
import "./App.css";
import "./style.css";
import "./typography.css";
import { useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { ReplyForm } from "./components/ReplyForm";
import { CommentType } from "./components/InputText";

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

  const [comment, setComment] = useState<CommentType>({
    author:1,
    comment: " ",
    maxlength: 100
  })

  return (
    <>
      <div className="App">
        <InputUsername4
          {...usernameObj}
          onUsernameObjChange={setUsernameObjName}
        />
        <Greeter value={usernameObj.name} fontSize="5vw" />
        <br/><br/>
        <ReplyForm {...comment} onValueChange={setComment}/>
        <br/><br/>
        Comments
        <CommentBox/>
      </div>
    </>
  );
}

export default App;
