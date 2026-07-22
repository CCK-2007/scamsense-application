import {

    Typography

} from "@mui/material";

function CharacterCounter({

    current,

    max

}) {

    return (

        <Typography

            variant="caption"

            color={

                current > max

                    ? "error"

                    : "text.secondary"

            }

        >

            {current}/{max}

        </Typography>

    );

}

export default CharacterCounter;