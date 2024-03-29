import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import LoginView from "./components/views/login/login.view";
import MainView from "./components/views/main/main.view";
import EmptyFolder from "./components/parts/empty-folder/empty-folder-modal.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LoginView />} />
        <Route path="main" element={<MainView />} />
        <Route path="empty" element={<EmptyFolder />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
