import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    Grid,
    Chip
} from "@mui/material";

import InfoCard from "../result/InfoCard";
import BulletCard from "../result/BulletCard";

function BatchAnalysisDialog({

    open,

    row,

    onClose

}) {

    if (!row) {

        return null;

    }

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    maxHeight: "88vh",
                    mb: 8
                }
            }}
        >

            <DialogTitle

                sx={{

                    fontWeight: "bold",

                    fontSize: 28

                }}

            >

                AI Analysis Report

            </DialogTitle>

            <DialogContent dividers>

                <Box

                    sx={{

                        mb: 2

                    }}

                >

                    <Typography

                        variant="h6"

                        fontWeight="bold"

                        gutterBottom

                    >

                        Original Message

                    </Typography>

                    <Typography

                        sx={{

                            mt: 2,

                            lineHeight: 1.8

                        }}

                    >

                        {row.Text}

                    </Typography>

                </Box>

                <Grid

                    container

                    spacing={4}

                    sx={{

                        mt: 4,

                        mb: 5

                    }}

                >

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            color="text.secondary"
                        >

                            Scam Type

                        </Typography>

                        <Chip

                            label={row["Predicted Scam Type"]}

                            color="error"

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            color="text.secondary"
                        >

                            Confidence

                        </Typography>

                        <Typography
                            fontWeight="bold"
                        >

                            {row["Confidence Score"]}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            color="text.secondary"
                        >

                            Risk Level

                        </Typography>

                        <Chip

                            label={row["Risk Level"]}

                            color="warning"

                        />

                    </Grid>

                </Grid>

                <InfoCard

                    title="AI Summary"

                    content={row["Summary"]}

                />

                <InfoCard

                    title="Why Suspicious?"

                    content={row["Why Suspicious"]}

                />

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mt: 2

                    }}

                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <BulletCard

                            title="Scam Indicators"

                            items={row["Scam Indicators"]}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <BulletCard

                            title="Safety Advice"

                            items={row["Safety Advice"]}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <BulletCard

                            title="Recommended Actions"

                            items={row["Recommended Actions"]}

                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <BulletCard

                            title="Prevention Tips"

                            items={row["Prevention Tips"]}

                        />

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

                <Button

                    variant="contained"

                    onClick={onClose}

                >

                    Close

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default BatchAnalysisDialog;