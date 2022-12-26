import { useState } from 'react';
import { Link } from "react-router-dom"
export default function dropDownItem(props) {

    // const signout = () => {
    //     localStorage.clear();
    // }

    return (
        <div onClick={() => localStorage.clear()}>
            <Link to={props.link}>
                <img src={props.image}></img>
                <span>{props.text}</span>
            </Link>
        </div>
    )
}