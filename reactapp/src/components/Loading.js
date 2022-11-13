import Pulsating from "./pulsating";
import "./styles.css";
function Loading({ stage }) {
    return (
        <div className="Beginning">
            <Pulsating visible={true} width={35} height={20}>
                Loading...
            </Pulsating>
        </div>
    );
}

export default Loading;
