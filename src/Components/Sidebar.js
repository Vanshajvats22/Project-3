import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../Assets/Group 46312 (1).svg';
import dashicon from '../Assets/Group 47993.svg';
import transicon from '../Assets/Group 46468.svg';
import transEnqicon from '../Assets/Group 47958.svg';
import lateicon from '../Assets/Group 47943.svg';
import arrowicon from '../Assets/Group 46288.svg';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default active index

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='side-bar'>
      <div className='logo'>
        <img src={logo} alt="SabPaisa" />
      </div>

      <div className='nav-list'>
        <ul>
          <li
            className={activeIndex === 0 ? 'li-item' : ''}
            onClick={() => handleClick(0)}
          >
            <span className={activeIndex === 0 ? 'active-span' : ''} ><img src={dashicon} alt='dashicon' /></span>Dashboard
          </li>
          <li
            className={activeIndex === 1 ? 'li-item' : ''}
            onClick={() => handleClick(1)}
          >
            <span className={activeIndex === 1 ? 'active-span' : ''}><img src={transicon} alt='transicon' /></span>Transaction History
          </li>
          <li
            className={activeIndex === 2 ? 'li-item' : ''}
            onClick={() => handleClick(2)}
          >
            <span className={activeIndex === 2 ? 'active-span' : ''}><img src={transEnqicon} alt='transEnqicon' /></span>Transaction Enquiry
          </li>
          <div className='horizontal-line'></div>
          <li
            className={activeIndex === 3 ? 'li-item' : ''}
            onClick={() => handleClick(3)}
          >
            <span className={activeIndex === 3 ? 'active-span' : ''}><img src={lateicon} alt='lateicon' /></span>Latest Update
          </li>
        </ul>
      </div>

      <div className='arrow'>
        <img src={arrowicon} alt="arrowicon" />
      </div>
    </div>
  );
}

export default Sidebar;
