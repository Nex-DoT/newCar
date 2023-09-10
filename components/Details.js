import React from 'react';
import carsData from '@/data/carsData';
const Details = ({router}) => {
    let numberID = router;
    let data = carsData[numberID]
    return (
        <div>
            <div className=' bg-gray-900 w-3/4 h-100 m-auto mt-5 p-12 rounded-md'>
                <h2 className=' text-3xl mb-8'>Information</h2>
                    <div className='flex items-center justify-around'>
                        <img src={data.image} className=' w-1/3 rounded-md' alt="" />
                        <div className='h-60 flex flex-col items-start justify-between'>
                            <p className='text-gray-000 text-xl'>{data.name}</p>
                            <p className='text-gray-400'>Model: {data.model}</p>
                            <p className='text-gray-400'>Year: {data.year}</p>
                            <p className='text-gray-400'>Category: {data.category}</p>
                            <p className='text-gray-400'>Distance: {data.distance}</p>
                            <p className='text-gray-400'>Location: {data.location}</p>
                            <p className='text-gray-400'>Price: ${data.price}</p>
                        </div>

                    </div>
            </div>
            <div className=' w-3/4 bg-gray-900 p-12 m-auto mt-5 mb-5 rounded-md'>
                <h2 className=' text-3xl'>Description</h2>
                <p className='p-4 text-gray-300' >{data.description}</p>
            </div>
        </div>
    );
};

export default Details;