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
            <Text margin="5%" fontSize={12}>
                This is some sample information
            </Text>
            <Button
                margin="1%"
                onClick={() => {
                    if (page != 1) setPage(page - 1);
                }}
            >
                {" "}
                Prev{" "}
            </Button>
            <Button
                margin="1%"
                onClick={() => {
                    if (page * 3 < stream.length) {
                        setPage(page + 1);
                    }
                }}
            >
                {" "}
                Next{" "}
            </Button>
            {stream.slice((page - 1) * 3, page * 3).map((stream) => {
                return (
                    <div>
                        {" "}
                        <Text>{stream.test}</Text>
                        <audio
                            controls
                            fontSize={12}
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
                    let i = (page - 1) * 3;
                    (i < page * 3) | (i < page.length);
                    i++
                ) {
                    return (
                        <div>
                            {" "}
                            <Text>{page[i].test}</Text>
                            <audio
                                controls
                                fontSize={24}
                                style={{
                                    margin: "0 auto",
                                    display: "block",
                                }}
                            >
                                <source src="horse.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    );
                }
            } */}
        </div>
    );
}

export default AudioStreams;
