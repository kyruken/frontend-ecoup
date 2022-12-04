import React from 'react';
import './App.css';
import Header from './components/header';
import Question from './components/question';
import { Link } from 'react-router-dom';
export default function Homepage() {
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/questions')
            .then(res => res.json())
            .then(data => setQuestions(data.questions))
    }, [])

    const questionElements = questions.map(question => {
        return <Link to={`/question/${question._id}`}><Question className="problem"
            title={question.title}
            description={question.description}
            difficulty={question.difficulty}
            key={question._id}
        /></Link>
    })
    return (
        <div>
            <Header />
            <main>
                <div className="daily margin-tb-1">
                    <p className="probtitle">Problem of the day</p>
                    {questionElements[0]}
                </div>
                <div className="problist">
                    {questionElements}
                </div>
            </main>
        </div>

    )
}