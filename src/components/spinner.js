import { Spinner } from "react-bootstrap";

export default function SuspenseSpinner() {
  const style = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "6rem",
    height:"6rem"
  };
  return <div><Spinner style={style}></Spinner></div>;
}
