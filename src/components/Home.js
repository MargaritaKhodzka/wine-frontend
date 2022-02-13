import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className = 'container'>
        <div>
            <Link className = 'largeButton' to='/wines'>See the wine list</Link>
        </div>
    </div>
  );
};

export default Home;