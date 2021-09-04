import React from 'react';
import './ImageCard.css'

const ImageCard = ({img}) => {
    

    const handleDelete = (id) => {
        fetch(`https://floating-headland-50904.herokuapp.com/deleteImg/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                alert('Tour deleted successfully');
                window.location.reload();
                
            })
    }

    return (
        <div className={`col-md-${img.cols} mb-3`}>
            <div className='card shadow-lg border'>
                <div className="card-body">
                    <img style={{ height: '300px', width: '100%' }} src={img.imgUrl} alt="" className="img-fluid image" />
                    <button onClick={()=>handleDelete(img._id)} className='btn btn-danger mt-3'>Delete</button>
                </div>
            </div>
        </div>


    );
};

export default ImageCard;