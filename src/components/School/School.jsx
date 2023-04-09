import React from 'react';
import { Link } from 'react-router-dom';

const School = ({school, addToAdmit}) => {

    const {id, schoolName, students, teachers, image, establishedYear} = school;
    
    return (
        <div className='border-2 border-slate-200 md:text-left text-center rounded p-3'>
            <img className='md:w-56 w-40 rounded border-2 mx-auto mb-3 border-slate-200 ' src={image} alt="" />
            <div className='ml-5'>
                <h2 className='text-xl font-medium'>Name: {schoolName}</h2>
                <p className='text-base mb-1'>Teachers: {teachers}</p>
                <p className='text-base mb-1'>Students: {students}</p>
                <p className='text-base mb-1'>Established Year: {establishedYear}</p>
                <button onClick={()=> addToAdmit(id)} className='bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'>Apply</button>
            </div>
        </div>
    );
};

export default School;