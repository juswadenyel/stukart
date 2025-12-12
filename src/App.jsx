import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return <AppRoutes user={user} setUser={setUser} />;
}
