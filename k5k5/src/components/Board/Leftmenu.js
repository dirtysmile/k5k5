import React from 'react';
import { Link } from 'react-router-dom';

const Leftmenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Board/test">전체</Link>
        </li>
        <li>
          <Link to="/Board/test2">공지사항</Link>
        </li>
        <li>자유 게시판</li>
        <li>Q n A</li>
      </ul>
    </div>
  );
};

export default Leftmenu;
