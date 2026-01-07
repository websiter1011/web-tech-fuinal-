function Teams() {
  const teams = [
    { name: "Lahore Qalandars", short: "LQ", captain: "Shaheen Afridi", color: "#16a34a" },
    { name: "Karachi Kings", short: "KK", captain: "Shan Masood", color: "#2563eb" },
    { name: "Islamabad United", short: "IU", captain: "Shadab Khan", color: "#dc2626" },
    { name: "Peshawar Zalmi", short: "PZ", captain: "Babar Azam", color: "#ca8a04" },
    { name: "Quetta Gladiators", short: "QG", captain: "Rilee Rossouw", color: "#7c3aed" },
    { name: "Multan Sultans", short: "MS", captain: "Mohammad Rizwan", color: "#059669" },
  ];

  return (
    <div className="container page">
      <div className="card-surface">
        <h2>Teams</h2>
        <p className="text-muted">PSL teams participating this season</p>

        {teams.map((team, index) => (
          <div
            key={index}
            style={{
              marginTop: "16px",
              padding: "16px 20px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f8fbfe")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "white")
            }
          >
            <div>
              <h4 style={{ marginBottom: "4px" }}>{team.name}</h4>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                Captain: {team.captain}
              </p>
            </div>

            <span
              style={{
                background: team.color,
                color: "white",
                padding: "6px 14px",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {team.short}
            </span>
          </div>
        ))}
      </div>

      <footer className="site-footer">
        SportSphere — Teams
      </footer>
    </div>
  );
}

export default Teams;
