import AudioStreams from "./AudioStreams";
import Submission from "./Submission";
import { Stack } from "@chakra-ui/react";
import "./main.css";
function Main() {
    return (
        <div className="mainPage">
            <Stack className="main" spacing="1%">
                <AudioStreams />
                <Submission />
            </Stack>
        </div>
    );
}

export default Main;
