import React from "react";

export default function Btn({
    className = "",
    icon = null,
    component = null,
    txt = null,
    children = null,
    onClick = null,
    type = null,
    disabled = false,
}) {
    const Component = component;

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {icon ? <img src={icon} alt="" /> : null}
            {component ? <Component /> : null}
            {txt}
            {children}
        </button>
    );
}
