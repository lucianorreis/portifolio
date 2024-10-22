import "./leftBar.scss"

export function LeftBar() {
    return(
        <div className="badge">
            <div className="Top"></div>
            <div className="Middle">
                <div className="myName">
                    <ul>
                        <li className="nome">Luciano</li>
                        <li className="nome">R.</li>
                        <li id="sobrenome" className="nome">Reis</li>
                    </ul>
                    </div>
            </div>
            <div id="myPJ"><p>©LR²Code</p></div>
        </div>
    )
}