// importing React and useState hook
import React, { useState } from "react";
// importing styles
import "../styles/profilepage/profilepage.scss";

// using a dummy user for login
// username: emilys
// password: emilyspass

function ProfilePage() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, expiresInMins: 30 }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Login failed");
        return res.json();
      })
      .then((data) => setUserData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="profile-page">
      <h2 className="profile-page__title">MY ACCOUNT</h2>

      {!userData ? (
        <form className="profile-page__form" onSubmit={handleLogin}>
          <label className="profile-page__label">
            Username:
            <br />
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="profile-page__input"
            />
          </label>

          <label className="profile-page__label">
            Password:
            <br />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="profile-page__input"
            />
          </label>

          <button
            disabled={loading}
            type="submit"
            className="profile-page__button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="profile-page__error">{error}</p>}
        </form>
      ) : (
        <div className="profile-page__user-info">
          <p>
            Welcome, {userData.firstName} {userData.lastName}!
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
