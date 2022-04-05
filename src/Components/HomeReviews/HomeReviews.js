import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const HomeReviews = (props) => {

    // console.log(props.review);
    const { name, description, ratings} = props.review;
    console.log(name);
    return (
        <div className="">
            <div className="border rounded-lg p-5 my-5 justify-center items-center container mx-auto">
                <p className="font-medium text-justify">{name}</p>
                <p className="text-gray-600 text-justify">{description}</p>
                <p className="text-yellow-600">
                    <small className="flex items-center"> <p className=""></p> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p>({ratings})</p>  </small>

                    {/* <small className="flex items-center"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p className="ml-2">(5/5)</p>
                    </small> */}
                </p>
            </div>
        </div>
    );
};

export default HomeReviews;