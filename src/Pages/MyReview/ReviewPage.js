import React from 'react';

const ReviewPage = ({ singleComment }) => {


    const { comment, email, photoURL, name } = singleComment;

    return (
        <div className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300 p-6 sm:flex justify-between items-center">

            <div>
                <h1>{comment}</h1>
            </div>

            <div>
                <img className='h-16 w-16 my-3 rounded-full' src={photoURL} alt="" />
                <p>{name?name:email}</p>

            </div>


        </div>
    );
};

export default ReviewPage;