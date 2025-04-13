import React from "react";
import ProfilePage from "../components/ProfilePage.jsx";
import { Imgdis } from "../components/image.jsx";
import { Newlogin } from "../components/form.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Imgdis />
      <Imgdis />
      <Imgdis />
      <Newlogin />
      <ProfilePage />
    </div>
  );
}

export default App;
