import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">게시판</Link>
        </li>
        <li>
          <Link to="/about">뉴스</Link>
        </li>
      </ul>
      <hr></hr>
      <Route path="/" component={Home} exact={true} />
      <Route path="/About" component={About} />
    </div>
  );
};

export default App;
