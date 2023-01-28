import { useState, useEffect } from 'react';
import Submission from '../components/submission'
import { useParams } from 'react-router-dom';
import '../Question.css';
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
            fetch(`${import.meta.env.VITE_API}/questions/${questionId}`)
                .then(res => res.json()),
            fetch(`${import.meta.env.VITE_API}/questions/${questionId}/submissions`)
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
            url: `${import.meta.env.VITE_API}/questions/${questionId}/submissions`
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
            <div className='padding-lr-3 padding-tb-2'>
                <div className='question-container'>
                    <h2 className='margin-bottom-1'>{question.title}</h2>
                    <button>{question.difficulty}</button>
                    <p className='padding-tb-1'>{question.description}</p>
                    <p>Write a paragraph about your experience. Focus on the following:</p>
                    <ul>
                        <li>What did you do to solve the problem?</li>
                        <li>Who and what are affected by doing this action?</li>
                        <li>Why do you think this problem is significant to do?</li>
                    </ul>
                    <form method="post" action="#">
                        <fieldset className='padding-tb-1'>
                            {errorMsg && <div>An error has occurred</div>}
                            {!submitSuccess && <label htmlFor="reflection">
                                Provide a reflection:
                                {isLoggedIn && <div className='input-container'>
                                    <textarea id="answer" name="answer" onChange={(e) => setFormSubmission(e.target.value)} placeholder="Enter your reflection..."></textarea>
                                    <button className='margin-top-1' onClick={(e) => submitSubmission(e)}>Submit</button>
                                </div>}
                                {!isLoggedIn && <div>
                                    Register to submit your own answers!
                                </div>}
                            </label>}
                            {submitSuccess && <div>Submission Successful</div>}
                        </fieldset>
                    </form>
                </div>
                <div className='question-container'>
                    <h3>Submissions</h3>
                    {submissionElements}
                </div>
            </div>
        </div>
    )
}