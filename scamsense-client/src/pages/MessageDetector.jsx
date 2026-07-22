import { useState } from "react";

import {
    Box,
    Grid
} from "@mui/material";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import PageContainer from "../components/layout/PageContainer";
import FloatingAssistant from "../components/common/FloatingAssistant";

import MessageInputCard from "../components/message/MessageInputCard";

import PredictionCard from "../components/result/PredictionCard";
import InfoCard from "../components/result/InfoCard";
import BulletCard from "../components/result/BulletCard";

import ProcessingDialog from "../components/common/ProcessingDialog";
import BatchProcessingDialog from "../components/batch/BatchProcessingDialog";
import BatchSummaryCard from "../components/batch/BatchSummaryCard";
import BatchResultsTable from "../components/batch/BatchResultsTable";


import {

    analyzeMessage,

    analyzeDataset,

    downloadDataset

} from "../api/ScamApi";

function MessageDetector() {

    // ==========================================
    // Single Message State
    // ==========================================

    const [message, setMessage] = useState("");

    // ==========================================
    // Batch Dataset State
    // ==========================================

    const [selectedFile, setSelectedFile] = useState(null);

    // ==========================================
    // Analysis Result
    // ==========================================

    const [analysisResult, setAnalysisResult] = useState(null);

    // ==========================================
    // Loading State
    // ==========================================

    const [loading, setLoading] = useState(false);


    const [batchLoading, setBatchLoading] = useState(false);

    const [batchResult, setBatchResult] = useState(null);

    // ==========================================
// Batch Analysis Dialog
// ==========================================

const [selectedBatchRow, setSelectedBatchRow] = useState(null);
const [dialogOpen, setDialogOpen] = useState(false);

    // ==========================================
    // Analysis Modes
    // ==========================================

    const isSingleMessageMode =
        message.trim().length > 0;

    const isBatchMode =
        selectedFile !== null;

    // ==========================================
    // Analyze Single Message
    // ==========================================

    const handleAnalyze = async () => {

        if (!message.trim()) {

            return;

        }

        try {

            setLoading(true);

            const result = await analyzeMessage(message);

            setAnalysisResult(result);

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.error ||

                "Unable to analyze message."

            );

        }

        finally {

            setLoading(false);

        }

    };


    // ==========================================
    // Analyze Batch Dataset (Excel)
    // ==========================================


    const handleAnalyzeDataset = async () => {

        if (!selectedFile) {

            return;

        }

        try {

            // Clear previous results

            setAnalysisResult(null);

            setBatchResult(null);

            setBatchLoading(true);

            const result = await analyzeDataset(

                selectedFile

            );

            setBatchResult(result);

            console.log("Batch Analysis Result");

            console.log(result);

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.error ||

                "Unable to analyse dataset."

            );

        }

        finally {

            setBatchLoading(false);

        }

    };


// ==========================================
// Download Batch Result
// ==========================================

const handleDownloadDataset = async (filename) => {

    try {

        const response = await downloadDataset(filename);

        const url = window.URL.createObjectURL(response.data);

        const link = document.createElement("a");

        link.href = url;

        link.download = filename;

        document.body.appendChild(link);

        link.click();

        link.remove();

        window.URL.revokeObjectURL(url);

    }

    catch (error) {

        console.error(error);

        alert("Unable to download file.");

    }

};

    // ==========================================
    // Clear Everything
    // ==========================================

    const handleClear = () => {

        setMessage("");

        setSelectedFile(null);

        setAnalysisResult(null);

        setBatchResult(null);

    };

    return (

        <Box

            sx={{

                display: "flex"

            }}

        >

            <Sidebar />

            <PageContainer>

                <Header />

                <Box

                    sx={{

                        p: 4

                    }}

                >

                    <MessageInputCard

                        message={message}

                        setMessage={setMessage}

                        selectedFile={selectedFile}

                        setSelectedFile={setSelectedFile}

                        isSingleMessageMode={isSingleMessageMode}

                        isBatchMode={isBatchMode}

                        onAnalyze={handleAnalyze}

                        onAnalyzeDataset={handleAnalyzeDataset}

                        onClear={handleClear}

                        loading={loading}

                        batchLoading={batchLoading}

                    />

                    {

                        analysisResult && (

                            <>

                                <PredictionCard

                                    result={analysisResult}

                                />

                                <InfoCard

                                    title="AI Summary"

                                    content={analysisResult.summary}

                                />

                                <InfoCard

                                    title="Why Suspicious?"

                                    content={analysisResult.why_suspicious}

                                />

                                <Grid

                                    container

                                    spacing={3}

                                    sx={{

                                        mt: 3

                                    }}

                                >

                                    <Grid size={{ xs: 12, md: 6 }}>

                                        <BulletCard

                                            title="Scam Indicators"

                                            items={analysisResult.scam_indicators}

                                        />

                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>

                                        <BulletCard

                                            title="Safety Advice"

                                            items={analysisResult.safety_advice}

                                        />

                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>

                                        <BulletCard

                                            title="Recommended Actions"

                                            items={analysisResult.recommended_actions}

                                        />

                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>

                                        <BulletCard

                                            title="Prevention Tips"

                                            items={analysisResult.prevention_tips}

                                        />

                                    </Grid>

                                </Grid>

                            </>

                        )

                    }

{/* Batch Results */}

{

    batchResult && (

        <>

            <BatchSummaryCard

                filename={batchResult.file_name}

                totalMessages={batchResult.total_messages}

                successfulAnalyses={batchResult.successful_analyses}

                onDownload={() =>

    handleDownloadDataset(

        batchResult.download_file

    )

}

            />

           <BatchResultsTable

    rows={batchResult.results}

    selectedRow={selectedBatchRow}

    setSelectedRow={setSelectedBatchRow}

    dialogOpen={dialogOpen}

    setDialogOpen={setDialogOpen}

/>

        </>

    )

}

                </Box>

            </PageContainer>

{/* hide the floating Assistant when I open the batch result and display it again after i close the batch result*/}
            {

    !dialogOpen && (

        <FloatingAssistant />

    )

}

            {/* Processing Dialog */}

            <ProcessingDialog

                open={loading}

            />

            {/* Batch Dataset Processing */}

            <BatchProcessingDialog

                open={batchLoading}

            />


        </Box>

    );

}

export default MessageDetector;