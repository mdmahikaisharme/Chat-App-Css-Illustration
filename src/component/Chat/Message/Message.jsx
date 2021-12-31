import React from "react";
import "./Message.css";

export default function Message({ data }) {
    const className = `message${data.sendBy === "Me" ? " messageByMe" : ""}`;

    return data.type === "txt"
        ? MessageTxt(className, data)
        : data.type === "img"
        ? MessageImg(className, data)
        : MessageRadio(className, data);
}

const MessageTxt = (className, data) => (
    <div className={className}>{data.value}</div>
);

const MessageImg = (className, data) => (
    <div className={`${className} messageImg`}>
        {data.value.map((item, index) => (
            <img src={item} key={index} alt="" />
        ))}
    </div>
);

const MessageRadio = (className, data) => (
    <div className={`${className} messageRadio`}>
        {data.value.map((item, index) => (
            <label
                className={`${className} messageRadioItem`}
                htmlFor={index}
                key={index}
            >
                <input id={index} type="radio" name={data.id} />
                <p>{item.name}</p>
                <h2>{item.value}</h2>
            </label>
        ))}
    </div>
);
