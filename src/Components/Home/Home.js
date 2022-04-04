import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Home = () => {
    return (
        <Link to='/home'>
            <div>
                <div className="md:flex container mx-auto m-2 p-2 items-center justify-around">
                    <div>
                        <h1 className="text-4xl text-justify   font-extrabold text-orange-400 mb-2">We sell the best flowers <br /> <p className="text-sky-700"> for you in any proggrame!</p></h1>

                        <p className="text-gray-400 text-justify mb-5">We have varaities collection of flowers. We have our own flower garder. We collect the best condition flowers for our customer. Our company has opened three new store in London area to serve our valuable customers. </p>
                    </div>
                    <div className=" md:ml-5">
                        <img className="rounded-xl justify-center" src={require('../images/flower.png')} alt="this is a flower" />
                    </div>
                </div>
                <div className="mt-5 container mx-auto">
                    <h1 className="text-4xl font-bold text-orange-500">Customer reviews (3)</h1>
                    {/* <div className="flex justify-around mt-5 text-justify gap-12 ">
                        <div className="w-1/2 border rounded-lg p-5">
                            <p className="font-medium">Istiak</p>
                            <p className="text-gray-600">Flowers are very lively. Thank you! Recommending this shop.</p>
                           <p className="text-yellow-600">
                                <small className="flex items-center"> <p className="mr-2">Ratings:</p> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p className="ml-2">(5/5)</p>
                                </small>
                            </p>
                        </div>
                        <div className="w-1/2 border rounded-lg p-5">
                            <p className="font-medium">Ashraf</p>
                            <p className="text-gray-600">Flowers has nice smelling! but the delivery was a little bit slow. Overall good!!!</p>
                            <p className="text-yellow-600">
                                <small className="flex items-center"> <p className="mr-2">Ratings:</p> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarHalf /> <p className="ml-2">(4.5/5)</p>
                                </small>
                            </p>
                        </div>
                        <div className="w-1/2 border rounded-lg p-5">
                            <p className="font-medium">Shuvo</p>
                            <p className="text-gray-600">I am recovering this shop for good quality products in cheap rate. Keep it up you guyz!!!</p>
                            <p className="text-yellow-600">
                                <small className="flex items-center"> <p className="mr-2">Ratings:</p> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p className="ml-2">(5/5)</p>
                                </small>
                            </p>
                        </div>
                    </div> */}
                    <Link to="/reviews">
                        <button className="rounded bg-blue-700 m-5 text-white px-5 py-1 mt-5">See all reviews</button></Link>
                </div>
            </div>
        </Link>
    );
};

export default Home;