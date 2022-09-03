import { useSelector } from "react-redux";
import CardBG from '../../../img/card-bg.jpg';

const Img = () => {  
  const {urlImg} = useSelector(state => state.image);

  return (
  <img src={urlImg || CardBG} alt="card-bg" width={840} height={520} />
)};

export default Img;