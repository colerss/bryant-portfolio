import React from "react";

export default function SkillEntry({title, skillLevel, subtitle = "", children}){
    return (<div>
        <h4>{title} ; {skillLevel}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        <p>
            {children}
        </p>
    </div>)

}