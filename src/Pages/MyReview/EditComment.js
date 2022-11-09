import React from 'react';

const EditComment = () => {

    const handelEditComment=()=>{
        
    }


    return (
        <div  className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300 h-60">
        <form onSubmit={handelEditComment} className='h-3/4'>
            <textarea className="textarea textarea-secondary w-full h-full text-2xl bg-gray-500 backdrop-contrast-50" name='comment' placeholder="Bio"></textarea>
            <div className="card-actions justify-center">
                <button className="btn btn-primary">Submit Your Comment</button>
            </div>
        </form>
    </div>
    );
};

export default EditComment;