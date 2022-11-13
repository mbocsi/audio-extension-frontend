import {
    Text,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Input,
    FormControl,
    FormLabel,
    Button,
} from "@chakra-ui/react";

function Submission() {
    return (
        <div>
            <Accordion defaultIndex={[0]} width="100%" allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="center">
                            <Heading>Submission</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                        <FormControl>
                            <FormLabel>URL:</FormLabel>
                            <Input type="url" />
                            <FormLabel>Audio File:</FormLabel>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="audio/mp3, audio/wav"
                            ></input>
                            <Button width="75%" margin="5%">
                                Submit
                            </Button>
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Submission;
