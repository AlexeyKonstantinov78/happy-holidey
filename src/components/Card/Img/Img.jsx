import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import CardBG from '../../../img/card-bg.jpg';

const Img = () => {
  const {urlImg} = useContext(imgContext);  
  return (
  <img src={urlImg || CardBG} alt="card-bg" width={840} height={520} />
)};

export default Img;