import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Btn } from "../../index";
import "./WriteMessage.css";

export default function WriteMessage() {
    const fSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="writeMessage">
            <form className="writeMessageForm" onSubmit={fSubmit}>
                <input
                    className="writeMessageInput"
                    type="text"
                    placeholder="Type a message..."
                />
                <Btn className="writeMessageSend" component={FaArrowRight} />
            </form>
        </div>
    );
}
