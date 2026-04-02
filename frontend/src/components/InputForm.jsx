import { useState } from 'react'

// Glolbals
const distanceOptions = [
  { label: '800m', value: '800' },
  { label: '1500m', value: '1500' },
  { label: '1600m', value: '1600' },
  { label: 'Mile', value: '1609' },
  { label: '3000m', value: '3000' },
  { label: '3200m', value: '3200' },
  { label: '2 Mile', value: '3218' },
  { label: '3 Mile', value: '4827' },
  { label: '5k', value: '5000' },
  { label: '10k', value: '10000' }
]


function InputForm({ onPredict }) {
    //UseState trackers
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState('5000')
    function handleSubmit(event) {
        event.preventDefault()
        onPredict(time, distance)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="time">Race Time</label>
                <input 
                    id="time" type="text" placeholder="e.g. 15:30"
                    value={time} onChange={(event) => setTime(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor="distance">Distance</label>
                <select id="distance"
                    value={distance} onChange={(event) => setDistance(event.target.value)}

                >
                    {/* Goes through the map in globals and sets the key/value to be the value
                       uses arrow function for simplicty and uses the label of map to be the 
                       label
                    */}
                    {distanceOptions.map((option) => (
                        <option key={option.value} value={option.value}> 
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Predict</button>
        </form>
    )
}

export default InputForm