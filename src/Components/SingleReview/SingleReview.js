import React from 'react';
import { BsStarFill} from 'react-icons/bs';

const SingleReview = (props) => {
    const { name, description, ratings } = props.review;
    console.log(name);
    return (
        <div className="grid-col-3">
            <div className="w-1/2 border rounded-lg p-5 my-5 justify-center items-center container mx-auto ">
                <p className="font-medium text-justify">{name}</p>
                <p className="text-gray-600 text-justify">{description}</p>
                <p className="text-yellow-600">
                    <small className="flex items-center"> <p className=""></p> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> <BsStarFill /> <p>({ratings})</p>  </small>

                    
                </p>
            </div>
        </div>
    );
};

export default SingleReview;