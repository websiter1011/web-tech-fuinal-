import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Fixtures from "./pages/Fixtures";
import Scoreboard from "./pages/Scoreboard";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fixtures" element={<Fixtures />} />
<Route path="/scoreboard" element={<Scoreboard />} />
<Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
