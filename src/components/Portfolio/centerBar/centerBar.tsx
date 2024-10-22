import { useState } from "react";
import "./centerBar.scss";
import "../../../assets/pngwing.com.png";
import htmlcss from "../../../assets/htmlcss.png";


export const CenterBar:React.FC = () => {

  function toDark() {
    return toTheme(!theme)
   }
 
  const [theme, toTheme] = useState(false);
  const topcolor = {
    backgroundColor: theme ? 'black': 'white',
    color: theme ? 'white': 'black',
    transition: '0.4s',
    background: 'url(../../../assets/whitedarma.png) no-repeat ',
  }
  const bottomcolor = {
    border: theme ? '1px solid white': '1px solid black',
    transition: '0.7s ease'
  }

  return (
    <div className="CenterBar" style={topcolor}>
      <div className="TopTop" ></div>
      <section className="Top">
        <p id="darma">
          <button id="themeButton" className="themeButton" onClick={toDark}></button>
        </p>
      </section>
      <section className="linguagens">
        <ul style={bottomcolor}>
          <li className="own">
            <img src={htmlcss} alt=""></img>
          </li>
          <li className="own">
            <img src="" alt="" />
          </li>
          <li className="own">
            <img src="" alt="" />
          </li>
          <li className="own">
            <img src="" alt="" />
          </li>
          <li className="own">
            <img src="" alt="" />
          </li>
          <li className="own">
            <img src="" alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}
