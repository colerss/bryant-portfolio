import React from "react";

export default function TimeEntry({title, subtitle = "", from, to, children}){
    return (<div>
        <h4>{title}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        <span>{from} - {to}</span>
        <p>
            {children}
        </p>
    </div>)
}