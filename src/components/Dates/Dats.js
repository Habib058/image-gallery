import React, { useState } from 'react';
import { useEffect } from 'react';

const Dats = () => {
    const [dates, setDates] = useState([]);

    const datesOfWeek = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d;
    })
    useEffect(() => {
        const datesForGraph = datesOfWeek.forEach(date => {
            // fetch('http://localhost:5000/imageByDates', {
            //     method: 'POST',
            //     headers: { 'content-type': 'application/json' },
            //     body: JSON.stringify({date:date})
            // })
            // .then(res =>res.json())
            // .then(data=>console.log(data))
        })
    }, [])

    return (
        <div>

        </div>
    );
};

export default Dats;