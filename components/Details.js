import React from 'react';
import carsData from '@/data/carsData';
const Details = ({router}) => {
    let numberID = router;
    let data = carsData[numberID]
    return (
        <div>
            <div className='flex items-center justify-around'>
                 <img src={data.image} className=' w-1/3' alt="" />
                <div className='h-60 flex flex-col items-start justify-between'>
                    <h2 className=' text-3xl'>{data.name}</h2>
                    <p className='text-gray-400'>Model: {data.model}</p>
                    <p className='text-gray-400'>Year: {data.year}</p>
                    <p className='text-gray-400'>Category: {data.category}</p>
                    <p className='text-gray-400'>Distance: {data.distance}</p>
                    <p className='text-gray-400'>Location: {data.location}</p>
                </div>
            </div>
                 <p>{data.description}</p>
        </div>
    );
};

export default Details;