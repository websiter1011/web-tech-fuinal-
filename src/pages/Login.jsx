import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // SIMPLE FRONTEND AUTH
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isAdmin", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="container page">
      <div
        className="card-surface"
        style={{ maxWidth: "400px", margin: "60px auto" }}
      >
        <h2 style={{ textAlign: "center" }}>Admin Login</h2>
        <p className="text-muted" style={{ textAlign: "center" }}>
          Login to manage fixtures and scores
        </p>

        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary-custom"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
