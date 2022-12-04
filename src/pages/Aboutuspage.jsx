import React from 'react';
import { Link } from 'react-router-dom';
export default function Aboutuspage() {
    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>About Us</h1>
            <p>EcoUp is a website dedicated to getting more people to participate
            in taking care of our earth. Everyday there will be a new environmental
            challenge for you to complete. Accomplish more challenges to receive
            new challenges.

           EcoUp was created by two aspiring programmers looking to tackle the
            ever growing issue of environmental destruction. By spreading different
            ways people can partake in the stewardship of the Earth, we hope that
            we can get more people to make meaningful changes in their lifestyle
            that will help to protect our ecosystem.
        </p>
        </div>
    )
}