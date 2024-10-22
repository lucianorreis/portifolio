import "./centerBar.scss";
import "../../../assets/pngwing.com.png"
import htmlcss from "../../../assets/htmlcss.png"


export function CenterBar() {
  return (
    <div className="CenterBar">
      <div className="TopTop"></div>
      <section className="Top">
        <p id="darma"></p>
      </section>
      <section className="linguagens">
        <ul>
          <li className="own"><img src={htmlcss} alt=""></img></li>
          <li className="own"><img src="" alt="" /></li>
          <li className="own"><img src="" alt="" /></li>
          <li className="own"><img src="" alt="" /></li>
          <li className="own"><img src="" alt="" /></li>
          <li className="own"><img src="" alt="" /></li>
        </ul>
      </section>
    </div>
  );
}
