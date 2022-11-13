import React from "react";
import "./styles.css";
import { Button } from "@chakra-ui/react";

function Beginning({ sendMessage }) {
    return (
        <div className="Beginning">
            <Button
                marginTop="5%"
                width="35vh"
                height="20vh"
                borderRadius={"45vh"}
                bgColor="#FFAC1C"
                onClick={sendMessage}
                fontFamily={"Arial"}
                fontStyle={"italic"}
                fontSize="60%"
                borderColor="#FFAC1C"
                borderWidth="2px"
            >
                Analyze Sound
            </Button>
        </div>
    );
}

export default Beginning;
