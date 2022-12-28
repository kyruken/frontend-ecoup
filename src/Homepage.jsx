import { useState, useEffect} from 'react';
import './App.css';

import Header from './components/header';
import Question from './components/question';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';

export default function Homepage() {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});


    useEffect(() => {
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
            id={question._id}
        /></Link>
    })
    return (
        <div >
            <Navbar />
            <div className='padding-lr-2'>
                <main>
                    <Header />
                    <div className="daily margin-tb-1 flex-column">
                        <p className="probtitle">Random Problem</p>
                        {questionElements[Math.floor(Math.random() * questionElements.length)]}
                    </div>
                    <div className="problist">
                        {questionElements}
                    </div>
                </main>
            </div>
        </div>

    )
}
