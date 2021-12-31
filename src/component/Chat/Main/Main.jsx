import React from "react";
import { Message } from "../index";
import img from "../../../asset/img";
import "./Main.css";

export default function Main() {
    const data = [
        {
            id: "000000",
            type: "txt",
            value: "That sounds great. I'd be happy with that.",
            sendBy: "Samuel Green",
        },
        {
            id: "000001",
            type: "txt",
            value: "Could you send over some pictures of your dog, please?",
            sendBy: "Samuel Green",
        },
        {
            id: "000002",
            type: "img",
            value: [img.dogImage1, img.dogImage2, img.dogImage3],
            sendBy: "Me",
        },
        {
            id: "000003",
            type: "txt",
            value: "Here are a few pictures. She's a happy girl!",
            sendBy: "Me",
        },
        {
            id: "000004",
            type: "txt",
            value: "Can you make it?",
            sendBy: "Me",
        },
        {
            id: "000005",
            type: "txt",
            value: "She looks so happy! The time we discussed works. How lon shall I take her out for?",
            sendBy: "Samuel Green",
        },
        {
            id: "000006",
            type: "radio",
            value: [
                { name: "30 minute walk", value: "$29" },
                { name: "1 hour walk", value: "$49" },
            ],
            sendBy: "Samuel Green",
        },
    ];

    return (
        <main className="main">
            {data.map((item, index) => <Message data={item} key={index} />)}
        </main>
    );
}
