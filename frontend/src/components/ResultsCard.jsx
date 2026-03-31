import React from 'react';

export function ResultsCard({ distance, predictedTime }) {
    return (
        <div className="results-card">
            <h3>{distance}</h3>
            <p>{predictedTime}</p>
        </div>
    )
}

export default ResultsCard