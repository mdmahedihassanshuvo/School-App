import React from 'react';
import school from '../../assets/school.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse gap-8 md:mt-10 md:mx-16'>
            <div className='flex flex-col text-left md:mx-0  mx-5 justify-center mt-5 mb-3'>
                <h1 className='text-3xl font-bold mb-3'>Welcome <span className='text-blue-600'>to</span> <br /> The Bronx Charter School for Children</h1>
                <p className='text-justify mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam atque dicta adipisci, itaque quidem maxime. Ea asperiores voluptatem at in architecto eligendi est repellat itaque, sint accusamus, esse dolor?</p>
                <div className='flex items-center gap-5'>
                    <Link to='/school'><button className='bg-blue-500 p-2 rounded text-white hover:bg-blue-800'>Choose Here</button></Link>
                    <Link to='/about' className='text-blue-600 font-medium'>Learn More...</Link>
                </div>
            </div>
            <div className='w-5/6 mx-auto'>
                <div>
                    <Lottie animationData={school} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;