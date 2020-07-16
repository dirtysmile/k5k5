import React from 'react';
import Leftmenu from './Leftmenu';
import Content from './Content';
import './Board.scss';

const Board = () => {
  return (
    <div className="k5k5-board">
      <div className="k5k5-leftpanel">
        <div className="k5k5-info">a</div>
        <div className="k5k5-leftmenu">
          <Leftmenu></Leftmenu>
        </div>
      </div>
      <div className="k5k5-pagecontent">
        <div className="k5k5-top">a</div>
        <div className="k5k5-content">
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default Board;
