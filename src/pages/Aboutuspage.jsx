import React from 'react';
import Navbar from '../components/navbar';

export default function Aboutuspage() {
    return (
        <div>
            <Navbar />
            <div className="padding-tb-2 padding-lr-3">
                <div className="question-container">
                    <h1 className='margin-bottom-1'>About Us</h1>
                    <p>EcoUp is a website dedicated to getting more people to participate
                    in taking care of our earth. Everyday there will be a new environmental
                    challenge for you to complete. Accomplish more challenges to receive
                    new challenges.</p>
                    <br></br>
                
                    <p>EcoUp was created by two aspiring programmers looking to tackle the
                    ever growing issue of environmental destruction. By spreading different
                    ways people can partake in the stewardship of the Earth, we hope that
                    we can get more people to make meaningful changes in their lifestyle
                    that will help to protect our ecosystem.
                    </p>
                </div>
            </div>
        </div>
    )
}