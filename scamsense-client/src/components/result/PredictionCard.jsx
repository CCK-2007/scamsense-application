import {
    Paper,
    Typography,
    Box,
    Grid,
    Chip,
    LinearProgress
} from "@mui/material";

import GppBadRoundedIcon from "@mui/icons-material/GppBadRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

function PredictionCard({ result }) {

    const confidence = parseFloat(
        result.confidence_score.replace("%", "")
    );

    const getRiskColor = (risk) => {

        switch ((risk || "").toLowerCase()) {

            case "high":
                return "#E53935";

            case "medium":
                return "#FB8C00";

            case "low":
                return "#43A047";

            default:
                return "#9E9E9E";
        }
    };

    const getScamIcon = (type) => {

        switch (type) {

            case "Banking Scam":
                return <AccountBalanceRoundedIcon sx={{ fontSize: 34 }} />;

            case "Parcel Scam":
                return <LocalShippingRoundedIcon sx={{ fontSize: 34 }} />;

            case "Job Scam":
                return <WorkRoundedIcon sx={{ fontSize: 34 }} />;

            case "Romance Scam":
                return <FavoriteRoundedIcon sx={{ fontSize: 34 }} />;

            case "Investment Scam":
                return <AttachMoneyRoundedIcon sx={{ fontSize: 34 }} />;

            case "Lottery Scam":
                return <EmojiEventsRoundedIcon sx={{ fontSize: 34 }} />;

            case "E-commerce Scam":
                return <ShoppingBagRoundedIcon sx={{ fontSize: 34 }} />;

            case "Loan Scam":
                return <AccountBalanceWalletRoundedIcon sx={{ fontSize: 34 }} />;

            default:
                return <SecurityRoundedIcon sx={{ fontSize: 34 }} />;
        }

    };

    return (

        <Paper
            elevation={0}
            sx={{
                mt: 3,
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #E5E7EB",
                backgroundColor: "#FFFFFF"
            }}
        >

            <Typography
                sx={{
                    fontSize: 20,
fontWeight: 700,
mb: 2.5,
                    color: "#3F3D56"
                }}
            >

                ScamSense AI Analysis Result

            </Typography>

            <Grid container spacing={2}>

                {/* Left Card */}

                <Grid size={{ xs: 12, md: 4 }}>

                    <Paper
    elevation={0}
    sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #F4C7C7",
        backgroundColor: "#FFF5F5",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }}
>

    <GppBadRoundedIcon
        sx={{
            color: getRiskColor(result.risk_level),
            fontSize: 58
        }}
    />

    <Typography
        sx={{
            mt: 2,
            fontSize: 24,
            fontWeight: 700,
            color: "#222"
        }}
    >
        {result.risk_level} Risk
    </Typography>

    <Typography
        sx={{
            mt: 1,
            fontSize: 15,
            color: "text.secondary",
            lineHeight: 1.7,
            maxWidth: 240
        }}
    >
        This message has been identified as a potential scam.
    </Typography>

    <Chip
        label={result.predicted_scam_type}
        sx={{
            mt: 3,
            px: 1,
            height: 36,
            borderRadius: "18px",
            bgcolor: getRiskColor(result.risk_level),
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem"
        }}
    />

</Paper>

                </Grid>

                {/* Right Side */}

                <Grid size={{ xs: 12, md: 8 }}>

                    <Grid container spacing={2}>

                        {/* Confidence */}

                        <Grid size={{ xs: 12 }}>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: "1px solid #E5E7EB"
                                }}
                            >

                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    mb={3}
                                >

                                    <AnalyticsRoundedIcon
                                        color="primary"
                                    />

                                    <Typography
                                        fontWeight={700}
                                    >
                                        Confidence Score
                                    </Typography>

                                </Box>

                                <LinearProgress
    variant="determinate"
    value={confidence}
    sx={{
        mt: 2,
        mb: 2,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#EEE6FF",

        "& .MuiLinearProgress-bar": {
            backgroundColor: "#7C4DFF",
            borderRadius: 10
        }
    }}
/>

                                <Typography
                                    align="right"
                                    fontWeight={700}
                                    
                                >
                                    {result.confidence_score}
                                </Typography>

                            </Paper>

                        </Grid>

                        {/* Scam Type */}

                        <Grid size={{ xs: 12 }}>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: "1px solid #E5E7EB"
                                }}
                            >

                        <Box
    sx={{
        display: "flex",
        alignItems: "center",
        gap: 2
    }}
>
   
    <Typography
        sx={{
            fontSize: 18,
            fontWeight: 700,
            color: "#3F3D56"
        }}
    >
        Scam Type:
    </Typography>

     <Box
        sx={{
            color: "#212121",
            display: "flex",
            alignItems: "center"
        }}
    >
        {getScamIcon(result.predicted_scam_type)}
    </Box>

    <Chip
        label={result.predicted_scam_type}
        sx={{
            height: 36,
            px: 1,
            borderRadius: "18px",
            bgcolor: getRiskColor(result.risk_level),
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem"
        }}
    />
</Box>

                            </Paper>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Paper>

    );

}

export default PredictionCard;