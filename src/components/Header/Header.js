import axios from 'axios';
import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Header = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [img, setImg] = useState(null);
    const onSubmit = data => {
    //    let d = new Date();
    //    d.setDate(d.getDate());
    //    console.log(d);
        const imgDetails = {
            date:new Date().toDateString(),
            cols:data.col,
            imgUrl: img
        };
        console.log(imgDetails.date);
        const url = 'https://floating-headland-50904.herokuapp.com/addImage';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(imgDetails)
        })
            .then(res => res.json())
            .then(result=>{
                alert('image Added Successfully');
                window.location.reload();
                
            })
    }

    const handleChange = event => {

        const imgData = new FormData();
        imgData.set('key', '16cf69b83bb1ecc5b8dea23167a2100e');
        imgData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="mb-5">
            <h1 className='text-center mt-5'>Image Gallery</h1>
            <div className="uploadContent">
                <div className="container">
                <Link className="text-center text-decoration-none" to="/stats"><button className="btn btn-primary button ">Go To Stats</button></Link>
                    <h2 className="m-5 text-center">Add Meme</h2>
                    <div className="container">
                        <form className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-4 mb-3">
                                <input onChange={handleChange} className="form-control" type="file" />
                            </div>
                            <div className="col-md-4 mb-3">

                                <select className="form-control"  {...register("col", { required: true })} > 
                                    <option disabled={true} value="Not set">Select Col</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    
                                </select>
                                {errors.gender && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-4">
                                <input className="form-control btn btn-success" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;