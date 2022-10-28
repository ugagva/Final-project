import React from "react";

type ButtonPropsType = {
    // onClick:()=>void;
    name: string;
}

export function Buttons(props: ButtonPropsType) {
    return (
        <button className="Btn">{props.name}</button>
    )
}

