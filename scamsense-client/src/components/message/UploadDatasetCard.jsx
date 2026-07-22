import {
    Box,
    Typography,
    Button
} from "@mui/material";

import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

function UploadDatasetCard({

    loading,

    batchLoading,

    selectedFile,

    setSelectedFile,

    isSingleMessageMode,

    onAnalyzeDataset

}) {

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (!file) {

            return;

        }

        const allowedExtensions = [

            ".xlsx",

            ".xls",

            ".csv"

        ];

        const fileName = file.name.toLowerCase();

        const validExtension = allowedExtensions.some(

            extension => fileName.endsWith(extension)

        );

        if (!validExtension) {

            alert(

                "Please upload an Excel or CSV file."

            );

            return;

        }

        const MAX_SIZE = 10 * 1024 * 1024;

        if (file.size > MAX_SIZE) {

            alert(

                "File size must be less than 10 MB."

            );

            return;

        }

        setSelectedFile(file);

    };

    const handleRemoveFile = () => {

        setSelectedFile(null);

    };

    return (

        <Box

            sx={{

                flex: 1,

                width: "100%",

                border: "2px dashed #C7B8FF",

                borderRadius: 4,

                backgroundColor: "#FCFAFF",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                p: 3

            }}

        >

            <Box

                sx={{

                    width: "100%",

                    display: "flex",

                    flexDirection: "column",

                    justifyContent: "center",

                    alignItems: "center",

                    textAlign: "center"

                }}

            >

                <UploadFileRoundedIcon

                    sx={{

                        fontSize: 70,

                        color: "#6C3BFF",

                        mb: 2

                    }}

                />

                <Typography

                    fontWeight="bold"

                    fontSize={26}

                >

                    Upload Excel Dataset

                </Typography>

                <Typography

                    color="text.secondary"

                    mt={1}

                >

                    Supports .xlsx, .xls and .csv

                </Typography>

                {

                    selectedFile && (

                        <>

                            <Box

                                mt={3}

                                display="flex"

                                flexDirection="column"

                                alignItems="center"

                            >

                                <DescriptionRoundedIcon

                                    sx={{

                                        fontSize: 34,

                                        color: "#6C3BFF",

                                        mb: 1

                                    }}

                                />

                                <Typography

                                    fontWeight={700}

                                    fontSize={13}

                                    color="#2E2E2E"

                                    sx={{

                                        maxWidth: "90%",

                                        wordBreak: "break-word"

                                    }}

                                >

                                    {selectedFile.name}

                                </Typography>

                            </Box>

                            <Box

                                mt={3}

                                display="flex"

                                flexDirection="column"

                                alignItems="center"

                            >

                                <CheckCircleRoundedIcon

                                    sx={{

                                        fontSize: 42,

                                        color: "#2E7D32",

                                        mb: 1

                                    }}

                                />

                                <Typography

                                    fontWeight={700}

                                    fontSize={20}

                                    color="#2E7D32"

                                >

                                    Dataset Ready for Analysis

                                </Typography>

                            </Box>

                            {/* Analyze Dataset Button */}

                            <Button

                                variant="contained"

                                fullWidth

                                onClick={onAnalyzeDataset}

                                disabled={

                                    loading ||

                                    batchLoading

                                }

                                sx={{

                                    mt: 3,

                                    py: 1.4,

                                    borderRadius: 2,

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

                                {

                                    batchLoading

                                        ?

                                        "Analysing Dataset..."

                                        :

                                        "Analyze Dataset"

                                }

                            </Button>

                        </>

                    )

                }

                {

                    isSingleMessageMode && (

                        <Typography

                            mt={2}

                            color="warning.main"

                        >

                            Upload is disabled while typing a message.

                        </Typography>

                    )

                }

                <Button

                    component="label"

                    variant="contained"

                    disabled={

                        loading ||

                        batchLoading ||

                        isSingleMessageMode

                    }

                    sx={{

                        mt: 3,

                        px: 4,

                        py: 1.2,

                        borderRadius: 2,

                        bgcolor: "#6C3BFF",

                        textTransform: "none",

                        fontWeight: 600,

                        boxShadow: "none",

                        "&:hover": {

                            bgcolor: "#5B2FE3",

                            boxShadow: "none"

                        }

                    }}

                >

                    {

                        selectedFile ?

                            "Change File"

                            :

                            "Choose File"

                    }

                    <input

                        hidden

                        type="file"

                        accept=".xlsx,.xls,.csv"

                        onChange={handleFileChange}

                    />

                </Button>

                {

                    selectedFile && (

                        <Button

                            startIcon={

                                <DeleteOutlineRoundedIcon />

                            }

                            color="error"

                            disabled={batchLoading}

                            onClick={handleRemoveFile}

                            sx={{

                                mt: 2,

                                textTransform: "none"

                            }}

                        >

                            Remove File

                        </Button>

                    )

                }

            </Box>

        </Box>

    );

}

export default UploadDatasetCard;