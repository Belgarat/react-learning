import React from "react";

//modo vecchio di scrivere le funzioni
/*export function InputUsername({ value }: { value: string }) {
  console.log(value);
  return (
    <input
      type="text"
      id="username"
      name="username"
      onChange={handleUsernameChange}
      value={value}
    />
  );
}*/

//modo nuovo e con return complessi e espliciti
/*export const InputUsername = ({ value }: { value: string })  => {
  console.log(value);
  <input 
    type="text" 
    id="username" 
    name="username" 
    onChange={handleUsernameChange}
    value={value}
  />
};*/

// modo alternativo per funzioni atomiche "monoriga" e con return implicito
/*export const InputUsername3 = ({ value }: { value: string }) => (
  <input type="text" id="username" name="username" onChange={handleUsernameChange} value={value}/>
);*/

//React.FC serve per "ereditare" velocemente tutte le proprietà di react
//non va usato sempre
//originale non toccare
/*export const InputUsername2: React.FC<UsernameModel> = ({ username }) => {
  return (
    <input
      type="text"
      id="username"
      name="username"
      onChange={handleUsernameChange}
      value={username}
    />
  );
};*/

/*const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
}*/

export interface UsernameModel {
  name: string;
  maxlength: number;
  onUsernameChange?: (newType: string) => void;
}

export const InputUsername2 = ({ name, onUsernameChange }: UsernameModel) => {
  return (
    <>
      <span>Type2: </span>
      <input
        type="text"
        id="username"
        name="username"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value.length <= 50) {
            if (onUsernameChange) {
              onUsernameChange(event.target.value);
            }
          }
        }}
      />
    </>
  );
};

export interface UsernameType {
  name: string;
  maxlength: number;
  onUsernameObjChange?: (newName: string) => void;
}

export const InputUsername4 = (props: UsernameType) => {
  //console.log(props.name, props.maxlength);
  return (
    <>
      <span>Type4: </span>
      <input
        type="text"
        id="username4"
        name="username4"
        value={props.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value.length <= props.maxlength) {
            if (props.onUsernameObjChange) {
              props.onUsernameObjChange(event.target.value);
              //console.log(event.target.value);
            }
          }
        }}
      />
    </>
  );
};
