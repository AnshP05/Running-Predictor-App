function InputForm({ onPredict }) {
    return (
        <form onSubmit={onPredict}>
            <div>
                <label htmlFor="time">Race Time</label>
                <input id="time" type="text" placeholder="e.g. 15:30"/>
            </div>

            <div>
                <label htmlFor="distance">Distance</label>
                <input id="distance" type="text" placeholder="e.g. 5k"/>
            </div>

            <button type="submit">Predict</button>
        </form>
    )
}

export default InputForm