import React from 'react';
import { Route } from 'react-router-dom';
import About from '../../About';
import Home from '../../Home';

const content = () => {
  return (
    <div>
      <Route path="/Board/test" component={About} />
      <Route path="/Board/test2" component={Home} />
    </div>
  );
};

export default content;
