import { Box } from "@mui/material";

function PageContainer({ children }) {

    return (

        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "#F5F7FB",
                minHeight: "100vh"
            }}
        >

            {children}

        </Box>

    );

}

export default PageContainer;