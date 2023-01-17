import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <a href="/">NZ Noiz</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
