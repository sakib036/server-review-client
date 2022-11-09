import React from 'react';
import { Link } from 'react-router-dom';
import register2 from '../../Assets/Login-reg/register2.png'
import register from '../../Assets/Login-reg/register.png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useNavigate } from "react-router-dom";
import useTitle from '../../Hooks/useTitle';
import { toast } from 'react-toastify';



const Register = () => {
    const {createUser, updateUserProfile}=useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Register')

    const handelRegister = (event) => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoUrl=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password, photoUrl);

        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            toast("Successfully Register!")
            handleUpdateUserProfile(name, photoUrl);
            if(user?.uid){
                navigate('/')

            }
        })
        .catch(error=>console.error(error))


        const handleUpdateUserProfile = (name, photoUrl) => {
            const profile = {
                displayName: name,
                photoURL: photoUrl,
            }

            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));
        }

     }


    return (
        <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                <div className=' ' >
                    <img className="w-full" src={register2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full bg-gradient-to-l from-violet-500 to-indigo-500  shadow-2xl drop-shadow-2xl">
                    <form onSubmit={handelRegister} className="card-body ">
                        <div className='flex justify-center'>
                            <img className='w-32' src={register} alt="" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="full name" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">User Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="user photo url" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold text-xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-black" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='my-3'>
                            <h1 className='italic'>Already have account please <Link to='/login' className='border-2 border-amber-500 py-2 px-3 bg-orange-500 rounded-2xl btn btn-active not-italic '>LOG IN</Link></h1>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;