import React, { useEffect } from "react";
import "./asset/scss/main.css";
import { Home } from "./page";

export default function App() {
    useEffect(() => { document.title = "Chat App Css Illustration - mdmahikaishar.me" }, []);

    return (
        <>
            <Home />
        </>
    );
}
