import { CommentModel, CommentSystemModel } from "../Interfaces"

const calulateCharLeft = (text: string, limit: number = 100): string => {
  const delta = limit - text.length;

  switch (true) {
    case (delta < 10):
      return 'replyformflex-charcounter-error';
    case (delta > 10 && delta < 50):
      return 'replyformflex-charcounter-alert';
    default:
      return 'replyformflex-charcounter';
  }
}

export function CharCounter({body, maxlength}: {body: string, maxlength: number}) {
  return (
    <>
      <span className={calulateCharLeft(body, maxlength)}>
        {(maxlength && (maxlength - body.length))}
      </span>
    </>
  );
}


