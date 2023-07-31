import React from "react";
import { CharCounter } from "../components/CharCounter";

export interface UsernameType {
  name: string;
  maxlength: number;
  onUsernameObjChange?: (newName: string) => void;
}

export const InputUsername4 = (props: UsernameType) => {
  return (
    <>
      <span >Type4: </span>
      <input
        type="text"
        id="username4"
        name="username4"
        value={props.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value.length <= props.maxlength) {
            if (props.onUsernameObjChange) {
              props.onUsernameObjChange(event.target.value);
            }
          }
        }}
      />
      <br/>
      <br/>
      <CharCounter value={props.name} />
    </>
  );
};
