import React from 'react';
import { Link } from 'react-router-dom';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const reviews = [
        { id: 1, name: 'Istiak', description: 'Flowers are very lively. Thank you! Recommending this shop.', ratings: 5/5},
        { id: 2, name: 'Ashraf', description: 'Flowers has nice smelling! but the delivery was a little bit slow. Overall good!!!', ratings: 4.5/5},
        { id: 3, name: 'Shuvo', description: 'I am recovering this shop for good quality products in cheap rate. Keep it up you guyz!!!', ratings: 5/5},
        { id: 4, name: 'Rajesry', description: 'Best shop ever!!!', ratings: 5/5},
        { id: 5, name: 'Samadrita', description: 'Made my work easier. Thank you guyz!!!', ratings: 5/5},
        { id: 6, name: 'Adon', description: 'It is a great help. Now I can buy products from my home.', ratings: 5/5},
    ];
    return (
        <Link to='/reviews'>
            <div className="">
                {
                    reviews.map(review => <SingleReview
                        key={review.id} review={review}
                    ></SingleReview>)
                }
           </div>
        </Link>
    );
};

export default Review;