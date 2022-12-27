import { useState, useEffect } from 'react';
import checkmark from '../assets/check-mark-icon.svg';
export default function Question(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        for (let x = 0; x < user.questions.length; x++) {
            if (user.questions[x] === props.id) {
                setIsAnswered(true);
                break;
            }
        }
    }, [])


    return (
        <div className='padding-all-1 padding-lr-2'>
            <div className='padding-tb-1'>
                <h2>{props.title}</h2>
                {isAnswered && <img src={checkmark}></img>}
                <button className={`margin-top-1 ${isAnswered ? 'margin-left-1' : ''}`}>{props.difficulty}</button>
            </div>
            <p className="border-bottom padding-tb-1">{props.description}</p>
        </div>
    )
}