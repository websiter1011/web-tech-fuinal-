import { useNavigate } from "react-router-dom";

function Home() {const navigate = useNavigate();

  return (
    <div className="container page">
      
      {/* HERO SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h1 style={{ color: "#1f8acb", fontWeight: "700" }}>
            Welcome to SportSphere
          </h1>
          <p style={{ color: "#666", marginTop: "10px" }}>
            Manage teams, schedule fixtures, and view the leaderboard.
            <br />
            (Cricket Edition)
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <span
            style={{
              background: "#198754",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            LQ vs KK · Mar 10
          </span>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "6px" }}>
            Venue: Gaddafi Stadium
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px" }}>
        
        {/* LIVE SCORE CARD */}
        <div className="card-surface">
          <h4 style={{ color: "#1f8acb" }}>Live Score</h4>

          <h2 style={{ marginTop: "15px", fontWeight: "700" }}>
            LQ 156/6 (20)
          </h2>

          <p style={{ color: "#666", marginTop: "8px" }}>
            Rohit (74) · Overs: 20
          </p>
        </div>

        {/* QUICK ACTIONS */}
        <div className="card-surface">
          <h4 style={{ color: "#1f8acb", marginBottom: "20px" }}>
            Quick Actions
          </h4>
<button
  className="btn btn-primary-custom"
  style={{ width: "100%", marginBottom: "10px" }}
  onClick={() => navigate("/teams")}
>
  View Teams
</button>

<button
  className="btn btn-outline-primary"
  style={{ width: "100%", marginBottom: "10px" }}
  onClick={() => navigate("/fixtures")}
>
  View Fixtures
</button>

<button
  className="btn btn-outline-primary"
  style={{ width: "100%" }}
  onClick={() => navigate("/leaderboard")}
>
  View Leaderboard
</button>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer" style={{ marginTop: "50px" }}>
        SportSphere — A Web Technologies Project
      </footer>
    </div>
  );
}

export default Home;
