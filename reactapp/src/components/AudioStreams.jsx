import { Text, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import "./main.css";
function AudioStreams() {
    const [stream, setStream] = useState([
        { test: "test1" },
        { test: "test2" },
        { test: "test3" },
        { test: "test4" },
    ]);
    const [page, setPage] = useState(1);
    return (
        <div>
            <Heading>Audio Streams</Heading>
            <Text margin="5%" fontSize={24}>
                This is some sample information
            </Text>
            <Button> Prev </Button>
            <Button> Next </Button>
            {stream.map((stream) => {
                return (
                    <div>
                        {" "}
                        <Text>{stream.test}</Text>
                        <audio
                            controls
                            fontSize={24}
                            style={{ margin: "0 auto", display: "block" }}
                        >
                            <source src="horse.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                );
            })}
            {/*() => {
                for (
                    let i = (page - 1) * 4;
                    (i < page * 4) | (i < page.length);
                    i++
                ) {
                    return (
                        <div>
                            {" "}
                            <Text>{page[i].test}</Text>
                            <audio
                                controls
                                fontSize={24}
                                style={{ margin: "0 auto", display: "block" }}
                            >
                                <source src="horse.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    );
                }
            }*/}
        </div>
    );
}

export default AudioStreams;
