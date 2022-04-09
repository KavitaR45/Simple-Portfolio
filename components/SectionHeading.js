import React from "react"

export default function SectionHeading({ title, tagline }) {
    return (
        <div className="container">
            <h2 className="text-white text-center">{title}</h2>
            <p className="text-white text-center">{tagline}</p>
        </div>
    )
}
