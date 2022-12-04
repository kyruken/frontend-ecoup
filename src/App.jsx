import React from 'react';
import './App.css';
import Header from './components/header';
import Question from './components/question';
function App() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data.questions))
  }, [])

  const questionElements = questions.map(question => {
    return <Question className="problem" 
      title={question.title}
      description={question.description}
      key={question._id}
    />
  })
  return (
    <div className="App">
      <Header />
      <main>
        <div className="daily">
          <p className="probtitle">Problem of the day</p>
          <p className="probprompt">thingy thingy thing</p>
        </div>

        <div className="problist">
          {questionElements}
        </div>
      </main>
    </div>
  )
}

export default App
