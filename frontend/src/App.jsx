import Body from './Body';
import About from './pages/About';
import Home from './pages/Home';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes basename='/'>
          <Route element={<Body />}>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
