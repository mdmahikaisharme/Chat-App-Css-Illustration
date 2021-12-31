import React from "react";
import { FaArrowLeft, FaDoorOpen } from "react-icons/fa"
import { Btn } from "../../index";
import img from "../../../asset/img";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="headerHold">
                <Btn className="headerBtn" component={FaArrowLeft} />

                <div className="headerUser">
                    <img className="headerAvater" src={img.avatar} alt="" />
                    <div className="headerInfo">
                        <h4 className="headerName">Samuel Green</h4>
                        <p className="headerAvailable">Available to Walk</p>
                    </div>
                </div>

                <Btn className="headerBtn" component={FaDoorOpen} />
            </div>
        </header >
    );
}
