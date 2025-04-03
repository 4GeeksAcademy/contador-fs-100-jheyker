import React from "react";
export const Digit = (props) => {
    return (
        <div className="bg-black m-2 p-3 rounded-3 border border-white text-white">
            <p className="fs-1">
                {props.digitValue}
            </p>
        </div>
    )}