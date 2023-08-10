import { CommentModel } from "../Interfaces"

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

export function CharCounter(props: CommentModel) {
  return (
    <>
      <span className={calulateCharLeft(props.body, props.maxlength)}>
        {(props.maxlength && (props.maxlength - props.body.length))}
      </span>
    </>
  );
}


