/* eslint-disable react/prop-types */
import carData from '../../../public/data/data.json';
import { useEffect, useState } from 'react';
import Title from '../../components/Title/Title';

const PublishCar = ({ title }) => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        setGetData(carData);
    }, []);

    const handleEdit = (id) => {
        // Handle edit action here
    };

    const handleDelete = (id) => {
        // Handle delete action here
    };

    return (
        <>
            <div className='ml-3'>
                <Title title={title} />
            </div>
            <div className="flex flex-wrap">
                {getData.map(item => (
                    <div key={item.id} className="md:w-1/4">

                        <div className="bg-white border rounded m-4">
                            {/* <div className="px-4 pt-3">
                                <button className="py-2 w-full text-sm border border-transparent rounded bg-red-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-blue active:bg-green-500 transition duration-150 ease-in-out inline-flex justify-center items-center">
                                    ৳  {item.price}
                                </button>
                            </div> */}
                            <div className="py-4 px-4">
                                <a href="">
                                    <img
                                        className="rounded-full mx-auto h-24 w-24 object-cover"
                                        src={item.img}
                                        alt=""
                                    />
                                </a>
                                <div className="py-4 text-center text-xl">
                                    <h1 className="leading-3 font-medium text-xl">
                                        {item.name}
                                    </h1>
                                    <span className="text-sm text-gray-700 font-normal leading-3">{item.seat}</span>
                                </div>
                                <div className="px-8 pb-4 pt-2 flex justify-between items-center">
                                    <div>
                                        <div style={{ fontSize: '13px' }} className="text-center font-base font-bold text-gray-500">
                                            Condition
                                        </div>
                                        <div style={{ fontSize: '10px' }} className="text-center text-gray-700 leading-none">
                                            {item.carCondition}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px' }} className="text-center font-base font-bold text-gray-500">
                                            Fule
                                        </div>
                                        <div style={{ fontSize: '10px' }} className="text-center text-gray-700 leading-none">
                                            {item.fuelType}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px' }} className="text-center font-base font-bold text-gray-500">
                                            Driver
                                        </div>
                                        <div style={{ fontSize: '10px' }} className="text-center text-gray-700 leading-none">
                                            {item.driverStatus}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between px-4">
                                    <button onClick={() => handleEdit(item.id)} className="py-1 w-full text-sm border border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-blue active:bg-green-500 transition duration-150 ease-in-out inline-flex justify-center items-center mr-3">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="py-1 ml-3 w-full text-sm border border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-blue active:bg-green-500 transition duration-150 ease-in-out inline-flex justify-center items-center">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PublishCar;
