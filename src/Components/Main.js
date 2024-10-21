import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Main.css';
import searchicon from '../Assets/Icon feather-search.svg';
import saveicon from '../Assets/Group 47792.svg';
import calendarIcon from '../Assets/Group 47960.svg';
import TransactionTable from './TransactionTable';

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [fromDate, setFromDate] = useState(null);  // Make it null initially for DatePicker
    const [toDate, setToDate] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='main'>
            <p>Search Transaction</p>
            <div className='section'>
                <p>Search options for the statement period</p>

                <div className="checkpoints">
                    <label className="radio-label">
                        <input
                            type='radio'
                            value='By Date'
                            checked={selectedOption === 'By Date'}
                            onChange={handleOptionChange}
                            className='custom-radio'
                        />
                        By Date
                    </label>

                    <label className="radio-label">
                        <input
                            type='radio'
                            value='By Month'
                            checked={selectedOption === 'By Month'}
                            onChange={handleOptionChange}
                        />
                        By Month
                    </label>

                    <label className="radio-label">
                        <input
                            type='radio'
                            value='Last 6 Months'
                            checked={selectedOption === 'Last 6 Months'}
                            onChange={handleOptionChange}
                        />
                        Last 6 Months
                    </label>

                    <label className="radio-label">
                        <input
                            type='radio'
                            value='Financial Year'
                            checked={selectedOption === 'Financial Year'}
                            onChange={handleOptionChange}
                        />
                        Financial Year
                    </label>
                </div>

                {selectedOption === 'By Date' && (
                    <div className='checkpoints-filter'>
                        <div className='from-dateCheckpoint'>
                            <label>From Date:</label><br />
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                dateFormat="yyyy-MM-dd" // Formatting the date
                                placeholderText="YYYY-MM-DD"
                                className='custom-datepicker'
                            />
                            <img src={calendarIcon} alt="calendar" className='calendar-icon' />
                        </div>

                        <div className='to-dateCheckpoint'>
                            <label>To Date:</label><br />
                            <DatePicker
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="YYYY-MM-DD"
                                className='custom-datepicker'
                            />
                            <img src={calendarIcon} alt="calendar" className='calendar-icon' />
                        </div>
                    </div>
                )}

                <hr></hr>

                <div className='serachSave-container'>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search Transaction ID' className='search-input'></input>
                        <button className='search-button'><img src={searchicon} alt='searchicon' className='search-icon'></img></button>
                    </div>

                    <div className='saveicon'><img src={saveicon} alt='saveimg'></img></div>
                </div>
                <div className='transaction-table'>
                    <TransactionTable />
                </div>
            </div>
        </div>
    );
};

export default Main;
