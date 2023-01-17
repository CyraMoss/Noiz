import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to={'/'}>NZ Noiz</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" exact element={<ProductScreen />} />
            <Route path="/" exact element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
