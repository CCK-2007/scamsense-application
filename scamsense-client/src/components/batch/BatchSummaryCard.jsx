import {
    Paper,
    Typography,
    Box,
    Button,
    Grid
} from "@mui/material";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

function BatchSummaryCard({

    filename,

    totalMessages,

    successfulAnalyses,

    onDownload

}) {

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 4,

                p: 4,

                borderRadius: 4,

                border: "1px solid #E5E7EB"

            }}

        >

            <Typography

                variant="h5"

                fontWeight="bold"

                mb={4}

            >

                Batch Analysis Summary

            </Typography>

            <Grid

                container

                spacing={4}

            >

                <Grid size={{ xs: 12, md: 4 }}>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >

                        <DescriptionRoundedIcon

                            sx={{

                                fontSize: 48,

                                color: "#6C3BFF",

                                mb: 2

                            }}

                        />

                        <Typography
                            color="text.secondary"
                        >

                            File Name

                        </Typography>

                        <Typography

                            fontWeight={700}

                            textAlign="center"

                            mt={1}

                        >

                            {filename}

                        </Typography>

                    </Box>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >

                        <DatasetRoundedIcon

                            sx={{

                                fontSize: 48,

                                color: "#1976D2",

                                mb: 2

                            }}

                        />

                        <Typography
                            color="text.secondary"
                        >

                            Total Messages

                        </Typography>

                        <Typography

                            variant="h4"

                            fontWeight="bold"

                            mt={1}

                        >

                            {totalMessages}

                        </Typography>

                    </Box>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >

                        <CheckCircleRoundedIcon

                            sx={{

                                fontSize: 48,

                                color: "#2E7D32",

                                mb: 2

                            }}

                        />

                        <Typography
                            color="text.secondary"
                        >

                            Successfully Analysed

                        </Typography>

                        <Typography

                            variant="h4"

                            fontWeight="bold"

                            mt={1}

                        >

                            {successfulAnalyses}

                        </Typography>

                    </Box>

                </Grid>

            </Grid>

            <Box

               sx={{

        width: "100%",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        mt: 5

    }}

            >

                <Button

                    variant="contained"

                    size="large"

                    startIcon={<DownloadRoundedIcon />}

                    onClick={onDownload}

                    sx={{

                        px: 5,

                        py: 1.5,

                        borderRadius: 3,

                        bgcolor: "#2E7D32",

                        textTransform: "none",

                        fontWeight: 700,

                        boxShadow: "none",

                        "&:hover": {

                            bgcolor: "#256628",

                            boxShadow: "none"

                        }

                    }}

                >

                    Download Result File

                </Button>

            </Box>

        </Paper>

    );

}

export default BatchSummaryCard;