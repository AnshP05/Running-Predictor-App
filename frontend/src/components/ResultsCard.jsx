import React from 'react';

export function ResultsCard({ distance, predictedTime }) {
    return (
        <div className="results-card">
            <h2>{distance}</h2>
            <p>{predictedTime}</p>
        </div>
    )
}

export default ResultsCard