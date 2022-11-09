import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const EditComment = () => {

    const oldComment=useLoaderData();
    const navigate = useNavigate();
    

    const handelEditComment=(e)=>{
        e.preventDefault();
        const form=e.target;
        const comment=form.comment.value;
        const newComment={comment};
        console.log(newComment , oldComment._id)


        fetch(`http://localhost:5000/comments/newComment/${oldComment._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newComment)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
            navigate('/myreview')
        })
        .catch(error=>console.error(error))
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