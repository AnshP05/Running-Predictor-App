import ResultCard from './ResultsCard'


function ResultsList({ results }) {
    return (
        <section>
            <h2>Predictions</h2>

            {results.map((result) => (
                <ResultCard 
                key={result.distance}
                distance={result.distance}
                predictedTime={result.predictedTime}
                />
            ))}
        </section>
    )
    
}

export default ResultsList