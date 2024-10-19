import "./rightBar.scss";
import linkedinImg from "../../../assets/LinkedIn.png";
import githubImg from "../../../assets/github.png";

export function RightBar() {
  return (
    <div className="rightBar">
      <section>
        <p>
          <ul>
            <li>
              <a id="linkedin" href="/">
                <img src={linkedinImg} alt="Linkedin Logo" width="70px" height="50px" />
              </a>
            </li>
            <li>
              <a id="github" href="/">
                <img src={githubImg} alt="Github Logo" width="70px" height="50px" />
              </a>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}
