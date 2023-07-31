import Greeter from "./components/Greeter";
import {
  InputUsername2,
  InputUsername4,
  UsernameModel,
  UsernameType
} from "./components/InputUsername";
import { Todolist, TodolistItem } from "./components/Todolist";
import { CharCounter } from "./components/CharCounter";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //const [todos, setTodos] = useState<TodolistItem[]>([]);

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

  //call first time only at component mount
  /*useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res));
    //console.log(JSON.stringify(todos, null, "\t"));
  }, []);
  */

  return (
    <div className="App">
      <Greeter value={usernameObj.name} fontSize="5vw" />
      <CharCounter value={usernameObj.name} />
      <br />
      <br />
      <InputUsername4
        {...usernameObj}
        onUsernameObjChange={setUsernameObjName}
      />
      <br />
    </div>
  );
}

export default App;
