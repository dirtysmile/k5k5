import React from 'react';

const Board = () => {
  const div0 = {
    display: 'flex',
    height: '1000px',
    width: '1200px',
    overflowY: 'hidden',
    marginRight: 'auto',
    marginLeft: 'auto',
  };
  const div1 = {
    color: 'red',
    border: '1px solid black',
    height: '200px',
  };
  const div2 = {
    color: 'grey',
    border: '1px solid black',
    height: 'calc(100% - 209px)',
  };
  const div3 = {
    color: 'blue',
    border: '1px solid black',
    height: '150px',
  };
  const div4 = {
    color: 'black',
    border: '1px solid black',
    height: 'calc(100% - 159px)',
  };

  const k5k5LeftPanel = {
    width: '200px',
  };

  const k5k5PageContent = {
    color: 'black',
    width: 'calc(100% - 200px)',
  };

  return (
    <div style={div0}>
      <div style={k5k5LeftPanel}>
        <div style={div1}>a</div>
        <div style={div2}>a</div>
      </div>
      <div style={k5k5PageContent}>
        <div style={div3}>a</div>
        <div style={div4}>a</div>
      </div>
    </div>
  );
};

export default Board;
