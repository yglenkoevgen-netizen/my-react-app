import React from 'react';
const UserCard = ({ currentTimeframe, onTimeframeChange }) => {
    
    const timeframes = [
        { key: 'daily', label: 'Daily' },
        { key: 'weekly', label: 'Weekly' },
    ];

    return (
        <div className="user-card">
            
            <div className="user-info">
                <img src="/assets/images/avatar_male.png" alt="Аватар користувача" className="avatar" />
                <div className="report-details">
                    <p className="report-for">Report for</p>
                    <h1 className="user-name">Name Surname</h1>
                </div>
            </div>
            
            <div className="timeframe-toggle">
                {timeframes.map((tf) => (
                    <button
                        key={tf.key}
                        className={`timeframe-button ${currentTimeframe === tf.key ? 'active' : ''}`}
                        data-timeframe={tf.key}
                        onClick={() => onTimeframeChange(tf.key)}
                    >
                        {tf.label}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default UserCard;