import React from 'react'

const WeatherBtn = ({convertDegrees}) => {
    return (
        <>
            <button className="btn border border-2 btn-sm w-50 w-auto p-2 m-2" onClick={convertDegrees}>Degrees °F/°C</button>
        </>
    )
}

export default WeatherBtn