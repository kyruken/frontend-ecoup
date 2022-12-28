import { useState, useEffect } from 'react';
import Submission from '../components/submission'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/navbar';

export default function Questionpage() {
    const questionId = useParams().questionId;
    const [question, setQuestion] = useState({});
    const [submissions, setSubmissions] = useState([]);

    const [formSubmission, setFormSubmission] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loginSuccess')) || false);

    useEffect(() => {
        Promise.all([
            fetch(`http://localhost:3000/questions/${questionId}`)
            .then(res => res.json()),
            fetch(`http://localhost:3000/questions/${questionId}/submissions`)
            .then(res => res.json())
        ]).then(data => {
            setQuestion(data[0].question);
            setSubmissions(data[1].submissions);
        })
    }, [])

    const submitSubmission = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                user: JSON.parse(localStorage.getItem('user'))._id,
                answer: formSubmission,
                question: questionId 
            },
            url: `http://localhost:3000/questions/${questionId}/submissions`
        }).then(setSubmitSuccess(true), (err) => {
            setSubmitSuccess(false);
            setErrorMsg(true);
        })
    }

    const submissionElements = submissions.map(submission => {
        return <Submission 
            answer={submission.answer}
            key={submission._id}
            username={submission.user.username}
        />
    })
    return (
        <div>
            <Navbar />
            <p>{question.difficulty}</p>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <form method="post" action="#">
                <fieldset>
                    {errorMsg && <div>An error has occurred</div>}
                    {!submitSuccess && <label htmlFor="reflection">
                        Provide a reflection:
                        {isLoggedIn &&<div>
                            <textarea id="answer" name="answer" rows="5" cols="90" onChange={(e) => setFormSubmission(e.target.value)} placeholder="Enter your reflection..."></textarea>
                            <button onClick={(e) => submitSubmission(e)}>Submit</button>
                        </div>}
                        {!isLoggedIn && <div>
                            Register to submit your own answers!
                            </div>}
                    </label>}
                    {submitSuccess && <div>Submission Successful</div>}
                </fieldset>
            </form>
            <h3>Submissions</h3>
            {submissionElements}
        </div>
    )
}