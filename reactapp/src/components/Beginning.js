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
                bgColor="#FFBF00"
                onClick={sendMessage}
                fontFamily={'Arial'}
                fontStyle={'italic'}
                fontSize="55%"
            >
                Analyze Sound
            </Button>
        </div>
    );
}

export default Beginning;
