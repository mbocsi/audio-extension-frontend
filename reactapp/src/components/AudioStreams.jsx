import { Text, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import akshaygigacringe from "./akshaygigacringe.mp3";
import "./main.css";
function AudioStreams() {
    const [stream, setStream] = useState([
        { test: "Akshaygigacringe", file: akshaygigacringe },
        { test: "test2", file: "" },
        { test: "test3", file: "" },
        { test: "test4", file: akshaygigacringe },
    ]);
    const [page, setPage] = useState(1);

    return (
        <div>
            <Heading>Audio Streams</Heading>
            <Text margin="5%" fontSize={12}>
                A list of single source audio streams found
            </Text>
            <Button
                margin="1%"
                onClick={() => {
                    if (page !== 1) setPage(page - 1);
                }}
            >
                {" "}
                Prev{" "}
            </Button>
            <Button
                margin="1%"
                onClick={() => {
                    if (page * 2 < stream.length) {
                        setPage(page + 1);
                    }
                }}
            >
                {" "}
                Next{" "}
            </Button>
            {stream.slice((page - 1) * 2, page * 2).map((stream) => {
                return (
                    <div>
                        {" "}
                        <Text marginTop="5%">{stream.test}</Text>
                        <audio
                            controls
                            fontSize={12}
                            style={{ margin: "0 auto", display: "block" }}
                        >
                            <source src={stream.file} />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                );
            })}
        </div>
    );
}

export default AudioStreams;
