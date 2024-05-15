import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    return token ? token.token : null;
  });

  const fetchToken = (role) => {
    fetch("http://127.0.0.1:6060/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: role,
        password: role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            Bearer: data.Bearer,
          })
        );
        setToken(data.Bearer);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <Navbar fetchToken={fetchToken} />
      <Home />
      <Courses token={token} />
      <Footer />
    </div>
  );
}

export default App;
