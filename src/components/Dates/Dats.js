import React, { useState } from 'react';
import { useEffect } from 'react';

const Dats = () => {
    const [img, setImg] = useState(null);

    const datesOfWeek = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d;
    })
    useEffect(() => {
        let datesForGraph = datesOfWeek.forEach(date => {
            fetch('http://localhost:5000/imageByDates', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({date:date})
            })
            .then(res =>res.json())
            .then(data=> {
                setImg(data);
            })
        })
    },[])
    console.log(img.length);

    return (
        <div>

        </div>
    );
};

export default Dats;