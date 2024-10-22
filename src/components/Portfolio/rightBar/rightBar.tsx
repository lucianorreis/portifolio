import "./rightBar.scss";
import linkedinImg from "../../../assets/LinkedinIcons/icons8-linkedin-150.png";
import githubImg from "../../../assets/github100.png";
import whatsapp from "../../../assets/whatsapp.png";

export function RightBar() {
  return (
    <div className="rightBar">
      <div id="top"></div>
        <div id="middle">
          <ul>
            <li>
              <a className="contatos" href="https://www.linkedin.com/in/luciano-r-reis-1394512a8/" target="_blank" rel="noreferrer">
                <img id="linkedin" className="imgcontatos" src={linkedinImg} alt="Linkedin Logo" />
              </a>
            </li>
            <li>
              <a className="contatos" href="https://github.com/lucianorreis" target="_blank" rel="noreferrer">
                <img id="github" className="imgcontatos" src={githubImg} alt="Github Logo"/>
              </a>
            </li>
            <li><a className="contatos" href="https://api.whatsapp.com/send?phone=21997399927" target="_blank" rel="noreferrer"><img id="whatsapp" src={whatsapp} alt="whatsapp icon" /></a></li>
          </ul>
        </div>
        <div id="bottom"></div>
    </div>
  );
}
