import { Text, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import "./main.css";
function AudioStreams() {
    const [page, setPage] = useState(1);
    return (
        <div>
            <Heading>Audio Streams</Heading>
            <Text margin="5%" fontSize={24}>
                This is some sample information
            </Text>
            <Button> Prev</Button>
            <Button> Next </Button>
            <Text>Source 1</Text>
            <audio controls fontSize={24}>
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <Text>Source 2</Text>
            <audio controls fontSize={24}>
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default AudioStreams;
