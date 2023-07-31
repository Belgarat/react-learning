import CSS from "csstype";

function Greeter({ value, fontSize }: { value: string; fontSize: string }) {
  const divStyle: CSS.Properties = {
    //"font-size": fontSize,
    //color: "grey",
  };

  //console.log(fontSize);

  return (
    <>
      <div style={divStyle}>Hello {value}!</div>
    </>
  );
}

export default Greeter;
