import React, { useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { useState } from 'react';


const Images = () => {
    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://floating-headland-50904.herokuapp.com/images')
            .then(res => res.json())
            .then(data => {
                setImg(data);
                setLoading(false)
            })
    }, [])
    // const classes = useStyles();
    return (
        <div className="container" >
            {
                loading ? <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> : <div className='d-flex justify-content-center mt-5'>
                    <div className='row card-deck'>
                        {
                            img.map(img => <ImageCard key={img._id} img={img}></ImageCard>)
                        }

                    </div>
                </div>
                
            }
            <p className="text-center text-secondary">All Rights Are Reserved | 2021</p>
            
        </div>
    );
};

export default Images;