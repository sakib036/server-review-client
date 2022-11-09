import React from 'react';
import {Link} from 'react-router-dom';

const MyComment = ({ oneComment, handelDeleteComment }) => {


   
   

    const { servicePicture, serviceTitle, comment, photoURL, name, email, _id } = oneComment;
    return (
        <div className="card sm:card-side bg-base-100 shadow-xl my-6">
            <figure><img className='sm:h-60 sm:w-60' src={servicePicture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>Your Comment : <br />{comment}</p>

                <div className="flex justify-between items-end">
                    <div>
                        <Link to={`/comments/newComment/${_id}`}><button  className="btn btn-accent">Edit Comment</button></Link>
                        <button onClick={()=>handelDeleteComment(oneComment)} className="btn btn-warning mx-3">Delete Comment</button>
                    </div>

                    <div>
                        <img className='w-16 h-16 rounded-full' src={photoURL} alt="" />
                        <h1>{name}</h1>
                        <p>{email}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComment;