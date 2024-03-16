import Slider from 'react-slick';
import ReviewCard from './ReviewCard';
import { reviews } from '../data/reviews';

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section>
            <h4>
                what people <span>SAY</span>
            </h4>
            <Slider
                {...settings}
                className='reviews'
            >
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        name={review.name}
                        rating={review.rating}
                        date={review.date}
                        photo={review.photo}
                        title={review.title}
                        opinion={review.opinion}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Reviews;
