import "./App.css";
import { Route, Routes} from "react-router-dom";
import RaffleShow from "./Components/RaffleShow";
import HomePage from "./HomePage";
import ReferralDashboard from "./pages/ReferralDashboard";


function App() {
   
  return (
    <>
         <Routes>  
            <Route path="/RaffleShow" element={<RaffleShow />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/referral" element={<ReferralDashboard />} />
          </Routes>
    </>
  );
}

export default App;
