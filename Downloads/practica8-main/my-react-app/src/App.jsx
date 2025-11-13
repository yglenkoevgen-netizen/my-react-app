import React, { useState, useEffect } from 'react';
import ActivityCard from './components/ActivityCard';
import UserCard from './components/UserCard';
import initialData from './data.json'; 

function App() {
    const [data, setData] = useState([]);
    const [currentTimeframe, setCurrentTimeframe] = useState('weekly');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            setTimeout(() => {
                setData(initialData);
                setIsLoading(false);
                setError(null);
            }, 500);

        } catch (e) {
            console.error('Не вдалося завантажити дані активності:', e);
            setError('Не вдалося завантажити дані. Будь ласка, спробуйте оновити сторінку.');
            setIsLoading(false);
        }

    }, []);

    const handleTimeframeChange = (newTimeframe) => {
        setCurrentTimeframe(newTimeframe);
    };

    if (error) {
        return (
            <main className="dashboard">
                 <p className="error-message">{error}</p>
            </main>
        );
    }

    if (isLoading) {
        return (
            <main className="dashboard">
                 <p style={{textAlign: 'center', margin: '2rem'}}>Завантаження даних...</p>
            </main>
        );
    }

    return (
        <main className="dashboard">
            <UserCard 
                currentTimeframe={currentTimeframe} 
                onTimeframeChange={handleTimeframeChange}
            />

            <div className="activity-grid">
                {data.map((activity) => (
                    <ActivityCard
                        key={activity.title}
                        title={activity.title}
                        timeframes={activity.timeframes}
                        currentTimeframe={currentTimeframe}
                    />
                ))}
            </div>

        </main>
    );
}

export default App;