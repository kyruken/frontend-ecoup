import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Question from './components/question';
import { Link } from 'react-router-dom';
export default function Homepage() {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem('loginSuccess')));
    }, [])
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
        /></Link>
    })
    return (
        <div >
            <nav>
                <Link className="home" to='/'>EcoUp</Link>
                <div className="sideicons">
                    <Link to='/aboutus'>About us</Link>
                    {!isLoggedIn && <Link to='/login'>Login</Link>}
                    {isLoggedIn && <div>{user.username}</div>}
                </div>
            </nav>
            <div className='padding-lr-2'>
                <main>
                    <Header />
                    <div className="daily margin-tb-1 flex-column">
                        <p className="probtitle">Problem of the day</p>
                        {questionElements[0]}
                    </div>
                    <div className="problist">
                        {questionElements}
                    </div>
                </main>
            </div>
        </div>

    )
}