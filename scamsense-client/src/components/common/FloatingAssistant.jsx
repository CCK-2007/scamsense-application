import { useState } from "react";

import {
    Box,
    Paper,
    Typography,
    IconButton,
    Fab
} from "@mui/material";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function FloatingAssistant() {

    const [open, setOpen] = useState(true);

    return (

        <>

            {/* Floating Chat Button */}

            <Fab

                color="primary"

                onClick={() => setOpen((previous) => !previous)}

                sx={{

                    position: "fixed",

                    bottom: 30,

                    right: 30,

                    zIndex: 9999

                }}

            >

                <SmartToyRoundedIcon />

            </Fab>

            {/* Assistant Dialog */}

            {

                open && (

                    <Paper

                        elevation={8}

                        sx={{

                            position: "fixed",

                            bottom: 100,

                            right: 30,

                            width: 340,

                            p: 3,

                            borderRadius: 4,

                            zIndex: 9998

                        }}

                    >

                        <Box

                            sx={{

                                display: "flex",

                                justifyContent: "space-between",

                                alignItems: "flex-start",

                                width: "100%",

                                mb: 2

                            }}

                        >

                            <Typography

                                sx={{

                                    fontWeight: "bold",

                                    fontSize: 18,

                                    flexGrow: 1

                                }}

                            >

                                Think something is a scam ?

                            </Typography>

                            <IconButton

                                size="small"

                                onClick={() => setOpen(false)}

                                sx={{

                                    ml: 1

                                }}

                            >

                                <CloseRoundedIcon />

                            </IconButton>

                        </Box>

                        <Typography

                            variant="body1"

                            color="text.secondary"

                            sx={{

                                lineHeight: 1.8

                            }}

                        >

                            ScamSense AI can help analyse suspicious
                            messages and provide safety recommendations.

                        </Typography>

                    </Paper>

                )

            }

        </>

    );

}

export default FloatingAssistant;