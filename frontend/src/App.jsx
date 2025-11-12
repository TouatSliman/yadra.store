import React, { useState, useEffect } from "react";
import apiClient from "./ApiClient";
import Header from "./components/Header";
import Map from "./components/Map";
import Menu from "./components/Menu";
import chefImage from "./assets/chef.png";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      try {
        // Use the apiClient to make the request
        const response = await apiClient.get("/api/message");
        setMessage(response.data.text);
      } catch (err) {
        setError("Failed to fetch message from backend.");
        console.error(err);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ margin: "0 auto", padding: "1rem 1rem", position: "relative"}}>
        <img src={chefImage} alt="Chef" style={{ width: "10rem", height: "auto", borderRadius: "50%", position: "absolute", top: "1rem", left: "1rem" }} />
        <Menu />
        <Map />
      </div>
    </div>
  );
}

export default App;
