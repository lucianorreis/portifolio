import { CenterBar } from "./centerBar/centerBar";
import { LeftBar } from "./leftBar/leftBar";

import "./portfolio.scss";
import { RightBar } from "./rightBar/rightBar";

export function Portfolio() {
    return (
        <div className="principal">
            <div className="content">
                <LeftBar />
                <CenterBar />
                <RightBar />
            </div>
        </div>
    )
}