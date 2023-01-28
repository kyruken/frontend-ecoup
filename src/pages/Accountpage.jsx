import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import '../Profile.css';
import axios from 'axios';

export default function Accountpage() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null));
    const [userSubmissions, setUserSubmissions] = useState(0);
    const [userQuestions, setUserQuestions] = useState(0);
    const [recentActivity, setRecentActivity] = useState([]);
    const [refreshedUser, setRefreshedUser] = useState(false);

    useEffect(() => {
        refreshUser();
        if (refreshedUser === true) {
            for (let x = 0; x < user.questions.length; x++) {
                fetch(`${import.meta.env.VITE_API}/questions/${user.questions[x]}`)
                .then(res => res.json()) 
                .then(data => setRecentActivity(prevState => {
                    let array = [...prevState];
                    array.push(data.question.title);
                    array = array.reverse();
                    return array;
                }));
            }
            setUserSubmissions(user.submissions.length);
            setUserQuestions(user.questions.length);
        }
    }, [refreshedUser])

    const refreshUser = () => {
        axios({
            method: "GET",
            data: {
                username: user.username,
                password: user.password
            },
            url: `${process.env.VITE_API}/users/${user._id}`
        }).then(res => {
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setRefreshedUser(true);
        });
    }
    const recentActivityElements = recentActivity.map(item => <div className='activity-container'>{item}</div>)

    return (
        <div>
            <Navbar />
            <div className="profile">
                <div>
                    <div className='profile-container'>
                        <h2>Profile</h2>
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </div>
                    <div className='profile-container'>
                        <h2>Problems</h2>
                        <h3>Submissions: <span>{userSubmissions}</span></h3>
                        <h3>Problems solved:<span>{userQuestions}</span></h3>
                    </div>
                </div>

            <div className='recent-activity'>
                <h2>Recent Activity</h2>
                {recentActivityElements}

            </div>
            </div>
        </div>
    )
}