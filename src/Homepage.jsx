import { useState, useEffect} from 'react';
import './App.css';

import Loading from './components/loading';
import Header from './components/header';
import Question from './components/question';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Homepage() {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const gettingData = await axios.get(`${import.meta.env.VITE_API}/questions`);
            // const gettingData = await fetch(`${import.meta.env.VITE_API}/questions`)
            setQuestions(gettingData.data.questions);
            setIsLoading(false);
        }
        loadData();
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
            {isLoading && <Loading />}
            {!isLoading && <div className={isLoading ? '' : 'fade-in'}>
                <Navbar />
                <div className='padding-lr-4'>
                    <main>
                        <Header/>
                        <div className="daily margin-tb-1 flex-column">
                            <p className="probtitle">Random Problem</p>
                            {questionElements[Math.floor(Math.random() * questionElements.length)]}
                        </div>
                        <div className="problist">
                            {questionElements}
                        </div>
                    </main>
                </div>
            </div>}
        </div>

    )
}
