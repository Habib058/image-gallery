import React, { useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { useState } from 'react';


const Images = () => {
    const [img,setImg] = useState([])

    useEffect(()=>{
        fetch('https://floating-headland-50904.herokuapp.com/images')
        .then(res =>res.json())
        .then(data=>setImg(data))
    },[])
    // const classes = useStyles();
    return (
        <div className="container" >
            <div className='d-flex justify-content-center mt-5'>
                <div className='row card-deck'>
                    {
                        img.map(img => <ImageCard key={img._id} img={img}></ImageCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Images;