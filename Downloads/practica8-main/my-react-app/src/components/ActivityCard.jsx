import React from 'react';

const getPreviousText = (timeframe) => {
    switch (timeframe) {
        case 'daily':
            return 'Yesterday';
        case 'weekly':
            return 'Last Week';
        default:
            return 'Previous';
    }
};

const formatHours = (hours) => `${hours}hr${hours !== 1 ? 's' : ''}`;

const ActivityCard = ({ title, timeframes, currentTimeframe }) => {
    const timeframeData = timeframes[currentTimeframe] || { current: 0, previous: 0 };
    const { current, previous } = timeframeData;
    const cardClass = title.toLowerCase().replace(' ', '-');
    const previousTimeText = getPreviousText(currentTimeframe);

    return (
        <div className={`activity-card ${cardClass}`} aria-label={`${title} activity tracking`}>
            <div className="card-content" tabIndex="0">
                <div className="card-header">
                    <h2>{title}</h2>
                    <button className="menu-dots" aria-label={`Меню для ${title}`}>...</button>
                </div>
                <div className="card-details">
                    <p className="current-time">{formatHours(current)}</p>
                    <p className="previous-time">{previousTimeText} - {formatHours(previous)}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;