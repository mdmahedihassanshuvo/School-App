import React from 'react';

const AddToApply = ({apply, children}) => {
    console.log(apply)
    return (
        <div>
            <h2 className='text-white mb-5 md:text-2xl text-xl font-medium md:font-semibold text-center md:mb-5'>Total Apply: {apply.length}</h2>
            {
                apply.map((school, index) => <p className='text-white'>{index+1}. {school.schoolName}</p>)
            }
            {children}
        </div>
    );
};

export default AddToApply;