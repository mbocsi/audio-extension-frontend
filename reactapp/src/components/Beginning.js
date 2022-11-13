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
                bgColor="#FFE896"
                onClick={sendMessage}
                borderColor="#FFE896"
                borderWidth="2px"
            >
                Analyze
            </Button>
        </div>
    );
}

export default Beginning;
