import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="app">

      <header className="header">
        <h1>🚀 SecureStore Dashboard</h1>
        <p>Full Stack Dockerized DevSecOps Application</p>
      </header>

      <main className="main">

        <div className="card">
          <h2>Backend Status</h2>
          <p>{message || "Loading..."}</p>
        </div>

        <div className="card">
          <h2>System Info</h2>
          <p>MongoDB + Redis Connected ✅</p>
          <p>Docker Containers Running 🐳</p>
        </div>

      </main>

      <footer className="footer">
        <p>Built by Amarendra 🚀 | DevSecOps Project</p>
      </footer>

    </div>
  );
}

export default App;