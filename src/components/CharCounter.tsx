export interface CharCounterType {
  value: string;
}

export function CharCounter({value}: CharCounterType) {
  return (
    <>
      <div>Char Counter: {value.length}</div>
    </>
  );
}
