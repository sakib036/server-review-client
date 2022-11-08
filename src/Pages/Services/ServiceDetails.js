import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../MyReview/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, picture, details, balance,_id } = service;
    const { user } = useContext(AuthContext);

    const handelComment = (event) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        const comments={
            service:_id,
            email:user?.email,
            name:user?.displayName,
            photoURL:user?.photoURL,
            servicePicture:picture,
            serviceTitle:title,
            comment
        }
        console.log(comments);
        fetch('http://localhost:5000/comments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(comments)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset();
        })
        .catch(error=>console.error(error))
    }
   
    return (
        <div>
            <div className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300">
                <div>
                    <figure><img src={picture} alt="Album" className='rounded-2xl w-full' /></figure>
                </div>

                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-2xl'>{details}</p>
                    <p className='text-xl font-bold'>Service Charge : {balance}</p>
                    <div className="card-actions justify-end">
                        <Link to='/services'> <button className="btn btn-primary">Go To Services</button></Link>
                    </div>
                </div>
            </div>
            <div>
            <h1 className='text-white text-3xl text-center my-6'>Review of {title}</h1>
            <Review></Review>
            </div>
            <div>
            
            {
                user?.uid ? <>
                    <div className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300 h-60">
                        <form onSubmit={handelComment} className='h-3/4'>
                            <textarea className="textarea textarea-secondary w-full h-full text-2xl bg-gray-500 backdrop-contrast-50" name='comment' placeholder="Bio"></textarea>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Submit Your Comment</button>
                            </div>
                        </form>
                    </div>
                </>
                    :
                    <><div className="card-actions justify-center">
                       <Link> <button className="btn btn-primary">Add a Comment Please Login First </button></Link>
                    </div></>
            }
        </div>
           
        </div>
    );
};

export default ServiceDetails;