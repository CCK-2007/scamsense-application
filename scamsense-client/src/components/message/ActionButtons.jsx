import {

    Stack,
    Button

} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

function ActionButtons({

    onAnalyze,

    onClear

}) {

    return (

        <Stack

            direction="row"

            spacing={2}

            mt={3}

        >

            <Button

                variant="contained"

                startIcon={<SearchRoundedIcon />}

                onClick={onAnalyze}

            >

                Analyze Message

            </Button>

            <Button

                variant="outlined"

                startIcon={<RestartAltRoundedIcon />}

                onClick={onClear}

            >

                Clear

            </Button>

        </Stack>

    );

}

export default ActionButtons;