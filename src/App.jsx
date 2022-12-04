import './App.css'

import Header from './components/header';
function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <div className="daily">
          <p className="probtitle">Problem of the day</p>
          <p className="probprompmt">thingy thingy thing</p>
        </div>

        <div className="problist">
          <div className="problem">blank</div>
          <div className="problem">blank</div>
          <div className="problem">blank</div>
          <div className="problem">blank</div>
        </div>
      </main>
    </div>
  )
}

export default App
