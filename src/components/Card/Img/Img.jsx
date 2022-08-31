import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const Img = (props) => {
  const img = useContext(imgContext);
  console.log(img);
  return (
  <img src={props.img} alt="card-bg" width={840} height={520} />
)};

export default Img;