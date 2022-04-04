import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const SingleReview = (props) => {
    const { name, description, rating } = props.review;
    // console.log(id);
    return (
        <div>
            <div className="w-1/2 border rounded-lg p-5 my-5 justify-center items-center container mx-auto ">
                <p className="font-medium text-justify">{name}</p>
                <p className="text-gray-600 text-justify">{description}</p>
                <p className="text-yellow-600">
                    <small className="flex items-center"> <p className="mr-2">{rating}</p> </small>

                    <small className="flex"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p className="ml-2">(5/5)</p>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default SingleReview;