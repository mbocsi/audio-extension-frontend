import Pulsating from "./pulsating";
import Fading from "./Fading";
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
                <Fading visible={true} width={35} height={20}>
                    Loading...
                </Fading>
            </div>
        );
    }
}

export default Loading;
