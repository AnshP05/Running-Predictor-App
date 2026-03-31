import { useState } from 'react'

function InputForm({ onPredict }) {
    //UseState trackers
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        onPredict(time, distance)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="time">Race Time</label>
                <input id="time" type="text" placeholder="e.g. 15:30"
                 value={time} onChange={(event) => setTime(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="distance">Distance</label>
                <input id="distance" type="text" placeholder="e.g. 5k"
                value={distance} onChange={(event) => setDistance(event.target.value)}/>
            </div>

            <button type="submit">Predict</button>
        </form>
    )
}

export default InputForm