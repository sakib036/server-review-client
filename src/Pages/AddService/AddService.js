import React from 'react';


const AddService = () => {

    const handelAddService=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const picture=form.picture.value;
        const balance=form.balance.value;
        const details=form.details.value;
        console.log(title,picture,balance,details)

        const service={title,picture,balance,details}


        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
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
           <div className="card flex-shrink-0 w-full bg-gradient-to-l from-violet-500 to-indigo-500  shadow-2xl drop-shadow-2xl">
                    <form onSubmit={handelAddService} className="card-body ">
                        <div className='flex justify-center'>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Title Of the Service</span>
                            </label>
                            <input type="text" name='title' placeholder="Title Of the Service" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Service Photo</span>
                            </label>
                            <input type="text" name='picture' placeholder="Service photo url" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Price</span>
                            </label>
                            <input type="text" name='balance' placeholder="price" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Details</span>
                            </label>
                            <textarea name='details' className="textarea textarea-bordered" placeholder="details about service"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Submit</button>
                        </div>
                        
                    </form>
                </div>
        </div>
    );
};

export default AddService;