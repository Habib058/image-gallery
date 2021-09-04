import { Details } from '@material-ui/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Dats.css'

const Dats = () => {
    const [count, setCount] = useState({});
    const [img, setImg] = useState([]);

    const datesOfWeek = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d.toDateString();
    })

    useEffect(() => {
        datesOfWeek.forEach(date => {
            fetch('https://floating-headland-50904.herokuapp.com/imageByDates', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ date: date })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(date, data.length);
                    count[date] = data.length;
                    setCount(count);
                    setImg(data.length);
                })
        })
    }, []);
    const state = {
        labels: datesOfWeek,
        datasets: [
            {
                label: 'Image Upload Per Day',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [
                    count[datesOfWeek[0]],
                    count[datesOfWeek[1]],
                    count[datesOfWeek[2]],
                    count[datesOfWeek[3]],
                    count[datesOfWeek[4]],
                    count[datesOfWeek[5]],
                    count[datesOfWeek[6]],
                ]
            }
        ]
    }





    return (
        <div className='lineChart'>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
            <Link className="text-center text-decoration-none" to="/"><h3 className="mt-5">Go to Home</h3></Link>
        </div>
    );
};

export default Dats;