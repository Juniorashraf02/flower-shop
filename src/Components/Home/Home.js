import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import HomeReviews from '../HomeReviews/HomeReviews';




const Home = () => {
    const [reviews, setReviews] = useProducts();
    const newReview = reviews.slice(0,3);
    console.log(newReview);
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
                    <div className="review-section">
                        {
                            newReview.map(review => <HomeReviews key={review.id} review={review}></HomeReviews>)
                        }

                    </div>
                    
                    <Link to="/reviews"> 
                        <button className="rounded bg-blue-700 m-5 text-white px-5 py-1 mt-5">See all reviews</button>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default Home;