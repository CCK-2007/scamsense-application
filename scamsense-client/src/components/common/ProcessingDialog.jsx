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
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

import { useEffect, useState } from "react";

const steps = [

    "Validating Input",

    "Running Machine Learning Model",

    "Generating Explainable AI",

    "Retrieving Scam Knowledge",

    "Generating AI Report",

    "Preparing Dashboard"

];

function ProcessingDialog({ open }) {

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {

        if (!open) {

            setCurrentStep(0);

            return;

        }

        const interval = setInterval(() => {

            setCurrentStep((previous) => {

                if (previous < steps.length - 1) {

                    return previous + 1;

                }

                return previous;

            });

        }, 1200);

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

                    p: 5,

                    textAlign: "center"

                }}

            >

                <Typography

                    variant="h5"

                    fontWeight="bold"

                    color="#6C3BFF"

                >

                    ScamSense AI

                </Typography>

                <Typography

                    sx={{

                        mt: 1,

                        mb: 4,

                        color: "text.secondary"

                    }}

                >

                    Please wait while ScamSense analyses your message.

                </Typography>

                <CircularProgress

                    size={70}

                    thickness={4}

                    sx={{

                        color: "#6C3BFF",

                        mb: 4

                    }}

                />

                <Stack

                    spacing={2}

                    sx={{

                        mt: 2,

                        textAlign: "left"

                    }}

                >

                    {

                        steps.map((step, index) => (

                            <Box

                                key={step}

                                sx={{

                                    display: "flex",

                                    alignItems: "center",

                                    gap: 2

                                }}

                            >

                                {

                                    index < currentStep ?

                                        <CheckCircleRoundedIcon

                                            sx={{

                                                color: "#4CAF50"

                                            }}

                                        />

                                    :

                                    index === currentStep ?

                                        <AutorenewRoundedIcon

                                            sx={{

                                                color: "#6C3BFF",

                                                animation: "spin 1s linear infinite",

                                                "@keyframes spin": {

                                                    "0%": {

                                                        transform: "rotate(0deg)"

                                                    },

                                                    "100%": {

                                                        transform: "rotate(360deg)"

                                                    }

                                                }

                                            }}

                                        />

                                    :

                                        <RadioButtonUncheckedRoundedIcon

                                            color="disabled"

                                        />

                                }

                                <Typography>

                                    {step}

                                </Typography>

                            </Box>

                        ))

                    }

                </Stack>

            </DialogContent>

        </Dialog>

    );

}

export default ProcessingDialog;