import React, { useContext } from 'react';
import { NavLink ,Link } from 'react-router-dom';
import imgLogo from '../../../Assets/Logo/logo-circle.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);

    const handelSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    console.log(user)
    return (
        <div>
            <div className="navbar text-white p-10 max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-grey-500 rounded-box w-52">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>

                        </ul>
                    </div>
                    <Link to='/'><img className='w-16' src={imgLogo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                   
                        <NavLink to='/home'><button className="btn btn-ghost">Home</button></NavLink>
                        <NavLink to='/services'><button className="btn btn-ghost">Services</button></NavLink>
                        <NavLink to='/blog'><button className="btn btn-ghost">Blog</button></NavLink>
                       
                    
                </div>
                <div className="navbar-end">
                {
                    user?.uid?<>
                    <NavLink to='/addservice'><button className="btn btn-ghost">ADD SERVICE</button></NavLink>
                    <NavLink to='/myreview'><button className="btn btn-ghost">MY REVIEW</button></NavLink>
                    <button onClick={handelSignOut} className="btn btn-ghost">Log Out</button>
                    
                    </>
                    :
                    <NavLink to='/login'><button className="btn btn-ghost">LogIn</button></NavLink>
                   
                }
                 </div>
            </div>
        </div>
    );
};

export default Header;