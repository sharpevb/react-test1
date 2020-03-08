import React from "react";
import CartButton from "../CartButton/index";
import "./style.css";


function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.img} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        PartNo: <strong>{props.number}</strong>
                    </li>
                    <li id="price">
                        ${props.pricing}
                    </li>

                        <CartButton />

                </ul>

            </div>
        </div>
    );
}

export default Card;