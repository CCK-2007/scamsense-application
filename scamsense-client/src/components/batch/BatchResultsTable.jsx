import { useState } from "react";

import {
    Paper,
    Typography
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import BatchAnalysisDialog from "./BatchAnalysisDialog";


function BatchResultsTable({

    rows,

    selectedRow,

    setSelectedRow,

    dialogOpen,

    setDialogOpen

}) {


    const columns = [

        {

            field: "Text",

            headerName: "Message",

            flex: 3,

            minWidth: 320,

            valueGetter: (value) =>

                value && value.length > 120

                    ? value.substring(0, 120) + "..."

                    : value

        },

        {

            field: "Predicted Scam Type",

            headerName: "Scam Type",

            flex: 1.4,

            minWidth: 150

        },

        {

            field: "Confidence Score",

            headerName: "Confidence",

            flex: 1,

            minWidth: 120

        },

        {

            field: "Risk Level",

            headerName: "Risk",

            flex: 0.8,

            minWidth: 100

        }

    ];

    const formattedRows = rows.map((row, index) => ({

        id: index + 1,

        ...row

    }));

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 4,

                p: 3,

                borderRadius: 4,

                border: "1px solid #E5E7EB"

            }}

        >

            <Typography

                variant="h5"

                fontWeight="bold"

                mb={3}

            >

                Batch Analysis Results

            </Typography>

            <Typography

                variant="body2"

                color="text.secondary"

                mb={2}

            >

                Click any row to view the full AI analysis.

            </Typography>

            <DataGrid

                rows={formattedRows}

                columns={columns}

                disableRowSelectionOnClick

                pageSizeOptions={[5, 10, 20]}

                initialState={{

                    pagination: {

                        paginationModel: {

                            pageSize: 5

                        }

                    }

                }}

                getRowHeight={() => "auto"}

                onRowClick={(params) => {

    setSelectedRow(params.row);

    setDialogOpen(true);

}}

                sx={{

                    border: "none",

                    "& .MuiDataGrid-columnHeaders": {

                        fontWeight: "bold",

                        backgroundColor: "#F8FAFC"

                    },

                    "& .MuiDataGrid-columnHeaderTitle": {

                        fontWeight: 700

                    },

                    "& .MuiDataGrid-row": {

                        cursor: "pointer"

                    },

                    "& .MuiDataGrid-row:hover": {

                        backgroundColor: "#F5F3FF"

                    },

                    "& .MuiDataGrid-cell": {

                        whiteSpace: "normal",

                        wordBreak: "break-word",

                        lineHeight: 1.6,

                        alignItems: "flex-start",

                        py: 2

                    },

                    "& .MuiDataGrid-cellContent": {

                        whiteSpace: "normal",

                        overflow: "visible",

                        textOverflow: "unset"

                    }

                }}

            />

           <BatchAnalysisDialog

    open={dialogOpen}

    row={selectedRow}

    onClose={() => {

        setDialogOpen(false);

        setSelectedRow(null);

    }}

/>

        </Paper>

    );

}

export default BatchResultsTable;