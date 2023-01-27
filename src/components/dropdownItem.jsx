import { useState } from 'react';
import { Link } from "react-router-dom"
export default function dropDownItem(props) {

    // const signout = () => {
    //     localStorage.clear();
    // }

    return (
        <div>
            <Link to={props.link}>
                <div className='dropdown-item'>
                    <img src={props.image} width='25'></img>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}