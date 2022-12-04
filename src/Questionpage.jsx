import React from 'react';
import './App.css';

import { useParams, Link } from 'react-router-dom';

export default function Questionpage() {
    const questionId = useParams().questionId;
    const [question, setQuestion] = React.useState({});

    console.log('rerender');
    React.useEffect(() => {
        fetch(`http://localhost:3000/questions/${questionId}`)
        .then(res => res.json())
        .then(data => setQuestion(data.question));

    }, [])
    return (
        <div>
            <Link to='/'>Back</Link>
            <p>{question.difficulty}</p>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
        </div>
    )
}