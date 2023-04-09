import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import School from '../School/School';
import Swal from 'sweetalert2'
import AddToApply from '../AddToApply/AddToApply';

const Schools = () => {
    const schools = useLoaderData()
    const [apply, setApply] = useState([])

    const addToAdmit = (id) => {
        const exist = schools.find(school => school.id === id)
        // console.log(exist)
        if (apply.includes(exist)) {
            Swal.fire({
                icon: 'warning',
                title: 'You already applied this',
                // text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }
        else if(apply.length == 3){
            Swal.fire({
                icon: 'error',
                title: 'You only applied 3 school',
                // text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }
        const newApply = [...apply, exist]
        setApply(newApply)
    }

    return (
        <div className='grid md:grid-cols-5 grid-cols-1 gap-5 '>
            <div className='col-span-4 grid md:grid-cols-4 grid-cols-1 gap-5 mx-10 mt-10'>
                {
                    schools.map(school => <School key={school.id} school={school} apply={apply} addToAdmit={addToAdmit}></School>)
                }
            </div>
            <div className='mt-10 bg-pink-500 md:mx-0 ml-10 md:mr-5 text-center md:sticky top-10 h-96 rounded p-5'>
                <AddToApply apply={apply}></AddToApply>
            </div>
        </div>
    );
};

export default Schools;