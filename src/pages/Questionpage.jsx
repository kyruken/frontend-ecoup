import { useState, useEffect } from 'react';
import Submission from '../components/submission'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Questionpage() {
    const questionId = useParams().questionId;
    const [question, setQuestion] = useState({});
    const [submissions, setSubmissions] = useState([]);

    const [formSubmission, setFormSubmission] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

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
                answer: formSubmission,
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
        />
    })
    return (
        <div>
            <Link to='/'>Back</Link>
            <p>{question.difficulty}</p>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <form method="post" action="#">
                <fieldset>
                    {errorMsg && <div>An error has occurred</div>}
                    {!submitSuccess && <label htmlFor="reflection">
                        Provide a reflection:
                        <textarea id="answer" name="answer" rows="5" cols="90" onChange={(e) => setFormSubmission(e.target.value)} placeholder="Enter your reflection..."></textarea>
                        <button onClick={(e) => submitSubmission(e)}>Submit</button>
                    </label>}
                    {submitSuccess && <div>Submission Successful</div>}
                </fieldset>
            </form>
            <h3>Submissions</h3>
            {submissionElements}
        </div>
    )
}