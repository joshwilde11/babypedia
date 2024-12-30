import React from "react";
import { useState } from "react";
import'../App.css';

const NameCard = ({ name, category, gender }) => {
    return (
        <div className="name-card">
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Gender: {gender}</p>
            </div>
    )
}

export default NameCard;