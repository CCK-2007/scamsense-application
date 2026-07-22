import {
    Paper,
    Typography,
    Box
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";

function InfoCard({

    title,

    content

}) {

    const isSummary =
        title === "AI Summary";

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 3,

                borderRadius: 4,

                overflow: "hidden",

                border: "1px solid #E5E7EB"

            }}

        >

            {/* Header */}

            <Box

                sx={{

                    px: 3,

                    py: 2,

                    display: "flex",

                    alignItems: "center",

                    gap: 1.5,

                    backgroundColor:

                        isSummary

                            ? "#F3EEFF"

                            : "#FFF7ED",

                    borderBottom:

                        "1px solid #E5E7EB"

                }}

            >

                {

                    isSummary

                        ?

                        <AutoAwesomeRoundedIcon

                            sx={{

                                color: "#6C3BFF"

                            }}

                        />

                        :

                        <FindInPageRoundedIcon

                            sx={{

                                color: "#F57C00"

                            }}

                        />

                }

                <Typography

                    fontSize={19}

                    fontWeight={700}

                >

                    {

                        isSummary

                            ?

                            "AI Explanation"

                            :

                            title

                    }

                </Typography>

            </Box>

            {/* Body */}

            <Box

                sx={{

                    p: 3

                }}

            >

                <Typography

                    sx={{

                        fontSize: 15.5,

                        lineHeight: 1.9,

                        color: "#444"

                    }}

                >

                    {content}

                </Typography>

            </Box>

        </Paper>

    );

}

export default InfoCard;