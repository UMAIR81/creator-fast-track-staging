import "./App.css";
import { Route, Routes, Navigate, useLocation} from "react-router-dom";
import RaffleShow from "./Components/RaffleShow";
import HomePage from "./HomePage";
import ReferralDashboard from "./pages/ReferralDashboard";
import LoginPage from "./pages/LoginPage";


function App() {
      
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
         <Routes>
            <Route
                path="/"
                element={isLoggedIn ? <HomePage /> : <Navigate to="/login" state={{ from: location }} replace/>}
            />   
          
             <Route
                  path="/login"
                  element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" replace />}
             />
            <Route path="/RaffleShow" element={<RaffleShow />} />
            <Route path="/referral" element={<ReferralDashboard />} />

            
            {/* <Route path="/RaffleShow" element={<RaffleShow />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/referral" element={<ReferralDashboard />} />
            <Route path="/leaderboard" element={<LoginPage />} />
            <Route path="/leaderboard/dashboard" element={<LeaderboardDashboard onLogout={handleLogout} />} /> */}
          </Routes>
    </>
  );
}

export default App;
