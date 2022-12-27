import { useState, useEffect } from 'react';

export default function Accountpage() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null));
    const [userSubmissions, setUserSubmissions] = useState(0);
    const [userQuestions, setUserQuestions] = useState(0);
    const [recentActivity, setRecentActivity] = useState([]);

    useEffect(() => {
        for (let x = 0; x < user.questions.length; x++) {
            fetch(`http://localhost:3000/questions/${user.questions[x]}`)
            .then(res => res.json())
            .then(data => setRecentActivity(prevState => [...prevState, data.question.description]))
        }
        setUserSubmissions(user.submissions.length);
        setUserQuestions(user.questions.length);
    }, [])
    
    const recentActivityElements = recentActivity.map(item => <div>{item}</div>)

    return (
        <div>
            <div>
                <h2>{user.username}</h2>
                <p>{user.email}</p>

            </div>

            <div>
                <h2>Submissions: <span>{userSubmissions}</span></h2>

                <h2>Problems solved:<span>{userQuestions}</span></h2>
            </div>

            <div>
                <h2>Recent Activity</h2>
                {recentActivityElements}

            </div>
        </div>
    )
}