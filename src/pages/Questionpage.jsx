import React from 'react';
import Submission from '../components/submission'
import { useParams, Link } from 'react-router-dom';

export default function Questionpage() {
    const questionId = useParams().questionId;
    const [question, setQuestion] = React.useState({});
    const [submissions, setSubmissions] = React.useState([]);

    console.log('rerender');
    React.useEffect(() => {
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
                    <label htmlFor="reflection">
                        Provide a reflection:
                        <textarea id="answer" name="answer" rows="5" cols="90" placeholder="Enter your reflection..."></textarea>
                    </label>
                </fieldset>
                <input type="submit" value="Submit" />
            </form>
            <h3>Submissions</h3>
            {submissionElements}
        </div>
    )
}