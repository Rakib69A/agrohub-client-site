import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <nav class="navbar bg-base-100 flex justify-between items-center px-6">
                <a href="#" class="btn btn-ghost normal-case text-xl">AgroHub</a>
                <div class="flex gap-2">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex items-center justify-between px-4'> 
                <button className="btn btn-primary">Categories</button>
                <nav class="navbar-center hidden lg:flex px-6">
                <ul class="menu menu-horizontal">
                    <li><a href="home">Home</a></li>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="aboutus">About Us</a></li>
                    <li><a href="helpcenter">Help Center</a></li>
                    <li><a href="contactus">Contact Us</a></li>
                    <li><a href="blogs">Blogs</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </nav>
            </div>
        </section>
    );
};

export default Header;