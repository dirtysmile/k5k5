import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Board from './components/Board';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/Board">게시판</Link>
        </li>
        <li>
          <Link to="/about">뉴스</Link>
        </li>
        <li>
          <Link to="/about">UI</Link>
        </li>
      </ul>
      <hr></hr>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Board" component={Board} />
      <Route path="/About" component={About} />
    </div>
  );
};

export default App;
