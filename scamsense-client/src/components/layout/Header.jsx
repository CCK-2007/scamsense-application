import { useState } from "react";

import {

    Box,
    Typography,
    Avatar,
    Paper,
    IconButton

} from "@mui/material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Header() {

    const [profileOpen, setProfileOpen] = useState(false);

    return (

        <Box

            sx={{

                height: 82.8,

                backgroundColor: "#FFFFFF",

                borderBottom: "1px solid #E5E7EB",

                px: 4,

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                position: "relative"

            }}

        >

            {/* Left Section */}

            <Box>

                <Typography

                    variant="h5"

                    fontWeight="bold"

                >

                    Message Scam Detector

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                >

                    Detect scam messages using ScamSense AI.

                </Typography>

            </Box>

            {/* Right Section */}

            <Box

                sx={{

                    position: "relative"

                }}

            >

                <Avatar

                    sx={{

                        bgcolor: "#6C3BFF",

                        width: 46,

                        height: 46,

                        cursor: "pointer"

                    }}

                    onClick={() =>

                        setProfileOpen((previous) => !previous)

                    }

                >

                    <PersonRoundedIcon />

                </Avatar>

                {

                    profileOpen && (

                        <Paper

                            elevation={8}

                            sx={{

                                position: "absolute",

                                top: 50,

                                right: 0,

                                width: 260,

                                borderRadius: 4,

                                p: 2,

                                zIndex: 999

                            }}

                        >

                            <Box

                                sx={{

                                    display: "flex",

                                    justifyContent: "flex-end",

                                    mb: 1

                                }}

                            >

                                <IconButton

                                    size="small"

                                    onClick={() => setProfileOpen(false)}

                                >

                                    <CloseRoundedIcon />

                                </IconButton>

                            </Box>

                            <Box

                                sx={{

                                    display: "flex",

                                    flexDirection: "column",

                                    alignItems: "center",

                                    mb: 2

                                }}

                            >

                                <Avatar

                                    sx={{

                                        bgcolor: "#6C3BFF",

                                        width: 70,

                                        height: 70,

                                        mb: 2

                                    }}

                                >

                                    <PersonRoundedIcon

                                        sx={{

                                            fontSize: 40

                                        }}

                                    />

                                </Avatar>

                                <Typography

                                    fontWeight="bold"

                                    fontSize={18}

                                >

                                    Sample User

                                </Typography>

                                <Typography

                                    color="text.secondary"

                                    fontSize={14}

                                >

                                    sample_user_001

                                </Typography>

                            </Box>

                            <Box>

                                <Typography

                                    sx={{

                                        mb: 1

                                    }}

                                >

                                    <strong>User ID:</strong>

                                    {" "}

                                    sample_user_001

                                </Typography>

                                <Typography>

                                    <strong>Name:</strong>

                                    {" "}

                                    Sample User

                                </Typography>

                            </Box>

                        </Paper>

                    )

                }

            </Box>

        </Box>

    );

}

export default Header;