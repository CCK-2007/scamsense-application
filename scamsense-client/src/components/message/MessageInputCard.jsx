import {
    Paper,
    Typography,
    TextField,
    Box,
    Grid,
    Button
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

import CharacterCounter from "./CharacterCounter";
import UploadDatasetCard from "./UploadDatasetCard";

const MIN_LENGTH = 10;
const MAX_LENGTH = 5000;

function MessageInputCard({

    message,

    setMessage,

    onAnalyze,

    onAnalyzeDataset,

    onClear,

    loading,

    batchLoading,

    selectedFile,

    setSelectedFile,

    isSingleMessageMode,

}) {

    // ==========================================
    // Validation
    // ==========================================

  // ==========================================
// Validation
// ==========================================

const meaningfulText = message
    .replace(/[^a-zA-Z0-9]/g, "") // Keep only letters and numbers
    .trim();

let inputError = "";

if (message.length === 0) {

    inputError = "Please enter a message.";

}

else if (meaningfulText.length === 0) {

    inputError = "Message cannot contain only spaces or symbols. Please enter a message containing letters or numbers.";

}

else if (meaningfulText.length < MIN_LENGTH) {

    inputError =
        `Message must contain at least ${MIN_LENGTH} meaningful characters.`;

}

else if (message.length > MAX_LENGTH) {

    inputError =
        `Maximum ${MAX_LENGTH} characters allowed.`;

}

    // ==========================================
    // Handle Input
    // ==========================================

    const handleMessageChange = (event) => {

        setMessage(event.target.value);

    };

    return (

        <Paper

            elevation={0}

            sx={{

                p: 3,

                borderRadius: 4,

                border: "1px solid #E5E7EB"

            }}

        >

            <Typography

                variant="h6"

                fontWeight="bold"

                mb={2}

            >

                1. Enter or Paste the Message or Upload Excel File

            </Typography>

            <Grid

                container

                spacing={3}

                alignItems="stretch"

            >

                {/* ==========================================
                    Left Section
                ========================================== */}

                <Grid

                    size={{ xs: 12, md: 8 }}

                    sx={{

                        display: "flex",

                        flexDirection: "column"

                    }}

                >

                    <TextField

                        multiline

                        rows={11}

                        fullWidth

                        placeholder="Paste a suspicious SMS, WhatsApp or Email message here..."

                        value={message}

                        onChange={handleMessageChange}

  disabled={
    loading ||
    batchLoading ||
    selectedFile !== null
}

                        error={Boolean(inputError)}

                        helperText={
                            inputError ||
                            "Enter a suspicious SMS, WhatsApp or Email message."
                        }

                        inputProps={{
                            maxLength: MAX_LENGTH
                        }}

                    />

                    <Box

                        sx={{

                            mt: 2,

                            display: "flex",

                            justifyContent: "space-between",

                            alignItems: "center"

                        }}

                    >

                        <Box

                            sx={{

                                display: "flex",

                                gap: 2

                            }}

                        >

                            <Button

                                variant="contained"

                                startIcon={<SearchRoundedIcon />}

                                onClick={onAnalyze}

                                disabled={
    loading ||
    batchLoading ||
    Boolean(inputError)
}

                                sx={{

                                    bgcolor: "#6C3BFF",

                                    px: 3,

                                    borderRadius: 2,

                                    textTransform: "none",

                                    fontWeight: 600,

                                    "&:hover": {

                                        bgcolor: "#5B2FE3"

                                    }

                                }}

                            >

                                Analyze Message

                            </Button>

                            <Button

                                variant="outlined"

                                startIcon={<RestartAltRoundedIcon />}

                                onClick={onClear}

                                disabled={
    loading ||
    batchLoading
}

                                sx={{

                                    color: "#6C3BFF",

                                    borderColor: "#6C3BFF",

                                    px: 3,

                                    borderRadius: 2,

                                    textTransform: "none",

                                    fontWeight: 600,

                                    "&:hover": {

                                        borderColor: "#5B2FE3",

                                        bgcolor: "#F5F1FF"

                                    }

                                }}

                            >

                                Clear

                            </Button>

                        </Box>

                        <CharacterCounter

                            current={message.length}

                            max={MAX_LENGTH}

                        />

                    </Box>

                </Grid>

                {/* ==========================================
                    Right Section
                ========================================== */}

                <Grid

                    size={{ xs: 12, md: 4 }}

                    sx={{

                        display: "flex"

                    }}

                >

                   <UploadDatasetCard

    loading={loading}

    batchLoading={batchLoading}

    selectedFile={selectedFile}

    setSelectedFile={setSelectedFile}

    isSingleMessageMode={isSingleMessageMode}

    onAnalyzeDataset={onAnalyzeDataset}

/>

                </Grid>

            </Grid>

        </Paper>

    );

}

export default MessageInputCard;