import React, { useEffect, useState } from 'react';
import ReviewPage from './ReviewPage';



const Review = ({ service, comments}) => {
  



    return (
        <div>
            <h1 className='text-white text-2xl text-center'>There are {comments.length} Comments of {service.title}</h1>
            {
                comments.map(singleComment => <ReviewPage
                    key={singleComment._id}
                    singleComment={singleComment}
                ></ReviewPage>)
            }
        </div>
    );
};

export default Review;