import { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    Typography,
    Box,
    CircularProgress,
    Stack
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

function BatchProcessingDialog({ open }) {

    const stages = [

        "Uploading Dataset",

        "Validating Dataset",

        "Analysing Messages",

        "Generating AI Report",

        "Preparing Download"

    ];

    const [currentStage, setCurrentStage] = useState(0);

    useEffect(() => {

        if (!open) {

            setCurrentStage(0);

            return;

        }

        const interval = setInterval(() => {

            setCurrentStage(previous => {

                if (previous >= stages.length - 1) {

                    return previous;

                }

                return previous + 1;

            });

        }, 2500);

        return () => clearInterval(interval);

    }, [open]);

    return (

        <Dialog

            open={open}

            maxWidth="sm"

            fullWidth

        >

            <DialogContent

                sx={{

                    py: 5,

                    px: 5,

                    textAlign: "center"

                }}

            >

                <Typography

                    variant="h5"

                    fontWeight="bold"

                >

                    ScamSense

                </Typography>

                <Typography

                    variant="h6"

                    color="#6C3BFF"

                    mt={1}

                >

                    Batch Dataset Analysis

                </Typography>

                <CircularProgress

                    size={70}

                    sx={{

                        mt: 4,

                        color: "#6C3BFF"

                    }}

                />

                <Typography

                    mt={4}

                    color="text.secondary"

                >

                    Please wait while ScamSense analyses

                    your uploaded dataset.

                </Typography>

                <Stack

                    spacing={2}

                    mt={5}

                    alignItems="flex-start"

                >

                    {

                        stages.map((stage, index) => (

                            <Box

                                key={stage}

                                display="flex"

                                alignItems="center"

                            >

                                {

                                    index < currentStage ?

                                        <CheckCircleRoundedIcon

                                            sx={{

                                                color: "#2E7D32",

                                                mr: 2

                                            }}

                                        />

                                    :

                                    index === currentStage ?

                                        <MoreHorizRoundedIcon

                                            sx={{

                                                color: "#6C3BFF",

                                                mr: 2

                                            }}

                                        />

                                    :

                                        <RadioButtonUncheckedRoundedIcon

                                            sx={{

                                                color: "#BDBDBD",

                                                mr: 2

                                            }}

                                        />

                                }

                                <Typography>

                                    {stage}

                                </Typography>

                            </Box>

                        ))

                    }

                </Stack>

                <Typography

                    mt={5}

                    variant="body2"

                    color="text.secondary"

                >

                    This may take a few moments depending on

                    the number of uploaded messages.

                </Typography>

            </DialogContent>

        </Dialog>

    );

}

export default BatchProcessingDialog;