import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categorization from "./pages/categorization";
import Start from "./pages/start";
import UserInformation from "./pages/user/user-information";
import UserSuccess from "./pages/user/user-success"
import OwnerInformation from "./pages/owner/owner-information";
import OwnerSuccess from "./pages/owner/owner-success";
import UserPractice from "./pages/user/practice-room";
import OwnerPractice from "./pages/owner/owner-practice-room";
import Profit from "./pages/owner/profit";

import './App.css';

function App() {
    return (
        <div className="root-layout">
                <BrowserRouter>
                    <div className="content-wrap">
                        <Routes>
                            <Route path="/" element={<Start />} />
                            <Route path="/categorization" element={<Categorization />} />
                            <Route path="/user/information" element={<UserInformation />} />
                            <Route path="/user/success" element={<UserSuccess />} />
                            <Route path="/owner/information" element={<OwnerInformation />} />
                            <Route path="/owner/success" element={<OwnerSuccess />} />
                            <Route path="/practice-room" element={<UserPractice />} />
                            <Route path="/owner/practice-room" element={<OwnerPractice />} />
                            <Route path="/profit" element={<Profit />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
    )
}

export default App;