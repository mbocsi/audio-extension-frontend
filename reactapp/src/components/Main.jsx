import AudioStreams from "./AudioStreams";
import Submission from "./Submission";
import { Stack } from "@chakra-ui/react";
import FadeInOut from "./FadeInOut";
import "./main.css";
function Main() {
    return (
        <div className="mainPage">
            <FadeInOut show={true} duration={1000}>
                <Stack className="main" spacing="1%">
                    <AudioStreams />
                    <Submission />
                </Stack>
            </FadeInOut>
        </div>
    );
}

export default Main;
