import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="h-full flex flex-col w-full bg-cyan-100">
      <Header />
      <div className="grid grid-cols-12 grow">
        <div className="col-span-2">
          <Aside />
        </div>
        <div className="col-span-10">
          <App />
        </div>
      </div>
    </main>
  </React.StrictMode>
);
