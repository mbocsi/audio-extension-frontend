import Pulsating from "./pulsating";
import Fading from "./Fading";
import FadeInOut from "./FadeInOut";
import "./styles.css";
function Loading({ fading }) {
    if (!fading) {
        return (
            <div className="Beginning">
                <Pulsating visible={true} width={35} height={20}>
                    Loading...
                </Pulsating>
            </div>
        );
    } else {
        return (
            <div className="Beginning">
                <FadeInOut show={true} duration={1000}>
                    <Fading visible={true} width={35} height={20}>
                        Loading...
                    </Fading>
                </FadeInOut>
            </div>
        );
    }
}

export default Loading;
