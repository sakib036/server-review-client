import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Review from '../MyReview/Review';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    useTitle('ServiceDetails')
    const service = useLoaderData();
    const { title, picture, details, balance, _id } = service;
    const { user } = useContext(AuthContext);
    const [changeComment,setChangeComment]=useState(false)

    const [comments, setComment] = useState([]);


    useEffect(() => {
        fetch(`https://perfect-engineering-server.vercel.app/comments/${service._id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [service,changeComment])


    const handelBlur=()=>{
        setChangeComment(false)
    }




    const handelComment = (event) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        const comments = {
            service: _id,
            email: user?.email,
            name: user?.displayName,
            photoURL: user?.photoURL,
            servicePicture: picture,
            serviceTitle: title,
            comment
        }
       
        fetch('https://perfect-engineering-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
               
                form.reset();
                toast("SuccessFully Create a Comment")

                 setChangeComment(true)
            })
            .catch(error => console.error(error))
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
                {
                    user?.uid ? <>
                        <div onBlur={handelBlur} className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300 h-60">
                            <form onSubmit={handelComment} className='h-3/4'>
                                <textarea className="textarea textarea-secondary w-full h-full text-2xl bg-gray-500 backdrop-contrast-50" name='comment' placeholder="Bio" required></textarea>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Submit Your Comment</button>
                                </div>
                            </form>
                        </div>
                    </>
                        :
                        <><div className="card-actions justify-center">
                            <Link to='/login'> <button className="btn btn-primary">Add a Comment Please Login First </button></Link>
                        </div></>
                }
            </div>
            <div>
                <h1 className='text-white text-3xl text-center my-6'>Review of {title}</h1>
                <Review key={service._id} service={service} comments={comments}></Review>
            </div>

        </div>
    );
};

export default ServiceDetails;