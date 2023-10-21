import { useEffect } from "react";
import "./App.css";
//import { CommentBox } from "./components/CommentBox";
import { CommentsList } from "./features/comments/commentsList";

//import { ReplyForm } from "./components/ReplyForm";
//import { useStore, fetchComments, fetchAuthors} from "./Store";
import { CommentModel } from "./Interfaces";
import { AddCommentForm } from "./features/comments/addCommentForm";

function App() {
  //const {maxlength, authors, comment, comments, updateBodyValue, addComment, removeComment, likeComment, editComment} = useStore();
  //const initComments = useStore(state => state.initComments);
  //const initAuthors = useStore(state => state.initAuthors);

  /*useEffect(() => {
    //fetchComments().then((comments) => initComments(comments));
    //console.log("Comments: ",comments);
  }, []);

  useEffect(() => {
    //fetchAuthors().then((authors) => initAuthors(authors));
    //console.log("Authors: ",authors);
  }, []);
  */
  //const editCommentPut = (idComment: number, bodyNew: string) => {
  //console.log("editCommentPut: ");
  //const res = putComment(comments, idComment, bodyNew);
  //console.log(res);
  //}

  const BearerToken =
    "Bearer d926f5b2471d35a18a1d7f45ef53aa54e696a2bc0c18f8c45266a609097441c47ebc9c6f7401bcd212c621576555a9905b88386dbf208f0a5bdd5bcefb30a202f19dd15547b6e9cc61a0ec26948666a5421d9603b663ebc3f0988514c316453167f18264a0d5f39b85782e7c86c6e598b935da36415ba2756e7de22b602ec1fb";
  const headers = { Authorization: BearerToken };
  /*
  // TODO: fetch and add preloaded comments
  const fetchComments = async () => {
    const response = await fetch(
      "http://localhost:1337/api/comments?populate=*",
      { headers }
    ).then((response) => response.json());
    //console.log("Response: ",response.data);
    return response.data;
  };
  // TODO: fetch and add preloaded comments
  const fetchAuthors = async () => {
    const response = await fetch(
      "http://localhost:1337/api/authors?populate=*",
      { headers }
    ).then((response) => response.json());
    //console.log("Response: ",response.data);
    return response.data;
  };
  */

  /*
  const putComment = async (
    comments: CommentModel[],
    id: number,
    bodyNew: string
  ) => {
    let body = {};
    body = {
      data: {
        body: bodyNew,
      },
    };
    const requestOptions: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: BearerToken,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch("http://localhost:1337/api/comments/" + id, {
      ...requestOptions,
    }).then((response) => response.json());
    //    .then(editComment(state => state.editComment(id,bodyNew)));
    return response;
  };*/

  return (
    <>
      <div className="App">
        {
          <AddCommentForm />
          /*}
        
        <ReplyForm
        authors={authors}
          comment={comment}
          updateBodyValue={updateBodyValue}
          addComment={addComment}
          maxlength={maxlength}
        />{*/
        }
        <br />
        <br />
        {
          <CommentsList />
          /*}<CommentBox
        authors={authors}
          updateBodyValue={updateBodyValue}
          comments={comments}
          maxlength={maxlength}
          removeComment={removeComment}
          editComment={putComment}
        />{*/
        }
      </div>
    </>
  );
}

export default App;
