import {h} from 'preact';  /** @jsx h */
import {Router} from 'preact-router';

// eslint-disable-next-line
import style from './App.css';

import {Navigation} from './components/Navigation';
import {Home} from './components/Home';
import {About} from './components/About';
import {Work} from './components/Work';
import {Error} from './components/Error';

const App = () => (
  <div>
    <Navigation/>
    <div class='content'>
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Work path='/work' />
        <Error type='404' default />
      </Router>
    </div>
  </div>
);

export default App;
