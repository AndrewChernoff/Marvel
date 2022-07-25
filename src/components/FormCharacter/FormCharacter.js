import { ComicsHeader } from "./../Comics/Comics";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import "../FormCharacter/FormCharacter.scss";

const FormCharacter = () => {
  const location = useLocation();
  const { charInfo } = location.state;

  console.log(charInfo);

  return (
    <div className="container">
      <ComicsHeader />
      <div className="formCharacter">
            <img src={charInfo[0].thumbnail.path + '.' + charInfo[0].thumbnail.extension}/>
            <div className="formCharacter__content">
                <h2>{charInfo[0].name}</h2>
                { !charInfo[0].description || charInfo[0].description == '' || charInfo[0].description == ' ' ?
                 <div className="formCharacter__descr">No description for this character</div> 
                : <div className="formCharacter__descr">{charInfo[0].description}</div> }
        </div>
      </div>
    </div>
  );
};

export default FormCharacter;
