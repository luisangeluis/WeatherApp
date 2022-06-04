import React from 'react'

const WeatherBtn = ({convertDegrees}) => {
    return (
        <>
            <button className="btn btn-primary btn-sm w-25 p-2" onClick={convertDegrees}>Degrees °F/°C</button>
        </>
    )
}

export default WeatherBtn