import React, { useState } from "react";
import "./auth.css";

export default function Auth() {
  const [mode, setMode] = useState("login"); // or 'register'
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`${mode === "login" ? "Logged in" : "Account created"} (demo)`);
    }, 700);
  }

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 18 }}>
        <div>
          <h2>{mode === "login" ? "Welcome back" : "Create your account"}</h2>
          <p className="muted">Use this demo auth to continue. This is client-side only for now.</p>
          <div style={{ marginTop: 18 }}>
            <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
              {mode === "register" && <input placeholder="Full name" required />}
              <input placeholder="Email" type="email" required />
              <input placeholder="Password" type="password" required />
              <button className="btn" type="submit" disabled={loading}>{loading ? "Working..." : (mode === "login" ? "Sign In" : "Create account")}</button>
            </form>
          </div>
        </div>

        <aside style={{ padding: 18, borderRadius: 12, background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ margin: 0 }}>{mode === "login" ? "New here?" : "Already have an account?"}</h3>
            <button className="btn ghost" onClick={() => setMode(mode === "login" ? "register" : "login")}>{mode === "login" ? "Register" : "Sign in"}</button>
          </div>
          <p className="muted" style={{ marginTop: 12 }}>
            This auth page is a placeholder: it demonstrates UI and local validation. Replace with your API logic when ready.
          </p>
        </aside>
      </div>
    </main>
  );
}
