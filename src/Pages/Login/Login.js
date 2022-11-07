import React from 'react';
import {Link} from 'react-router-dom';
import imgUser from '../../Assets/Login-reg/user-blue.png';
import imgLogin from '../../Assets/Login-reg/login.png';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Login = () => {
    const {login}=useContext(AuthContext);

    const handelLogin = (event) => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
        })
        .catch(error=>console.error(error))

    }


    return (
        <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 my-10">
                <div className="skew-x-12">
                   <img src={imgLogin} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full bg-gradient-to-l from-violet-500 to-indigo-500  shadow-2xl drop-shadow-2xl skew-y-6">
                    <form onSubmit={handelLogin} className="card-body ">
                        <div className='flex justify-center'>
                            <img className='w-20' src={imgUser} alt="" />
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='my-3 italic'>
                            <h1>Have't account please <Link to='/register' className='border-2 border-amber-500 py-2 px-3 bg-orange-500 rounded-2xl btn btn-active not-italic'>REGISTER</Link> Now</h1>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;