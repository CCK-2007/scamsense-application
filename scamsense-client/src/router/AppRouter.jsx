import { Routes, Route } from "react-router-dom";

import MessageDetector from "../pages/MessageDetector";

function AppRouter() {

    return (

        <Routes>

            <Route
                path="/"
                element={<MessageDetector />}
            />

        </Routes>

    );

}

export default AppRouter;