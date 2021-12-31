import React from "react";
import { } from "../index";
import { Chat } from "../../page";
import "./Mobile.css";

export default function Mobile() {
    return (
        <div className="mobileOuter">
            <div className="mobile">
                <div className="mobileHead"></div>

                <Chat />
            </div>
        </div>
    );
}
