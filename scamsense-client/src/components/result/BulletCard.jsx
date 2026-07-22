import {
    Paper,
    Typography,
    Box
} from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

function BulletCard({

    title,

    items = []

}) {

    const getTheme = () => {

        switch (title) {

            case "Scam Indicators":

                return {

                    icon: <WarningAmberRoundedIcon />,

                    header: "#FFF3F0",

                    iconColor: "#E53935",

                    card: "#FFF9F8"

                };

            case "Safety Advice":

                return {

                    icon: <VerifiedUserRoundedIcon />,

                    header: "#EEF8F2",

                    iconColor: "#2E7D32",

                    card: "#F9FFFB"

                };

            case "Recommended Actions":

                return {

                    icon: <ChecklistRoundedIcon />,

                    header: "#EEF4FF",

                    iconColor: "#1565C0",

                    card: "#FAFCFF"

                };

            default:

                return {

                    icon: <SecurityRoundedIcon />,

                    header: "#F3EEFF",

                    iconColor: "#6C3BFF",

                    card: "#FCFAFF"

                };

        }

    };

    const theme = getTheme();

    // ==========================================
    // Support both arrays and strings
    // ==========================================

    const bulletItems = Array.isArray(items)

        ? items

        : typeof items === "string"

            ? items

                .split(/\r?\n|;/)

                .map(item => item.trim())

                .filter(item => item.length > 0)

            : [];

    return (

        <Paper

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: 4,

                overflow: "hidden",

                border: "1px solid #E5E7EB"

            }}

        >

            {/* Header */}

            <Box

                sx={{

                    display: "flex",

                    alignItems: "center",

                    gap: 1.5,

                    px: 3,

                    py: 2,

                    backgroundColor: theme.header,

                    borderBottom: "1px solid #E5E7EB"

                }}

            >

                <Box

                    sx={{

                        color: theme.iconColor,

                        display: "flex"

                    }}

                >

                    {theme.icon}

                </Box>

                <Typography

                    fontSize={18}

                    fontWeight={700}

                >

                    {title}

                </Typography>

            </Box>

            {/* Content */}

            <Box

                sx={{

                    p: 2

                }}

            >

                {

                    bulletItems.length > 0 ? (

                        bulletItems.map((item, index) => (

                            <Paper

                                key={index}

                                elevation={0}

                                sx={{

                                    mb: 2,

                                    p: 2,

                                    borderRadius: 3,

                                    bgcolor: theme.card,

                                    border: "1px solid #ECECEC"

                                }}

                            >

                                <Box

                                    sx={{

                                        display: "flex",

                                        alignItems: "flex-start",

                                        gap: 2

                                    }}

                                >

                                    <Box

                                        sx={{

                                            color: theme.iconColor,

                                            mt: 0.3

                                        }}

                                    >

                                        {theme.icon}

                                    </Box>

                                    <Typography

                                        sx={{

                                            fontSize: 15,

                                            lineHeight: 1.7

                                        }}

                                    >

                                        {item}

                                    </Typography>

                                </Box>

                            </Paper>

                        ))

                    ) : (

                        <Typography

                            color="text.secondary"

                            sx={{

                                textAlign: "center",

                                py: 2

                            }}

                        >

                            No information available.

                        </Typography>

                    )

                }

            </Box>

        </Paper>

    );

}

export default BulletCard;