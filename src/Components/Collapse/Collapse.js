import React, { useState } from "react";

const Collapse = ({ id, content, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li key={id}>
            <div className="Title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span className={`flèche ${isOpen ? "Rotation" : "flècheR"}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <div className={`Card-content ${isOpen ? "Visible" : ""}`}>
                <div className="Text">{content}</div>
            </div>
        </li>
    );
};

export default Collapse;