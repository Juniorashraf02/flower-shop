import { useState, useEffect } from "react"

const useProducts = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json').then((response) => response.json()).then(data =>setReviews(data))
    }, []); 

    return [reviews, setReviews];
}

export default useProducts;