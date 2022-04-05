import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useProducts([]);
    return (
        <Link to='/reviews'>
            <div>
               {reviews.map((review) =><SingleReview key={review.id} review={review}></SingleReview>)}
           </div>
        </Link>
    );
};

export default Review;