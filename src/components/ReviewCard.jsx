/* eslint-disable react/prop-types */
import StarRating from './StarRating';

const ReviewCard = ({ name, rating, date, photo, title, opinion }) => {
    return (
        <div className='card'>
            <div className='col'>
                <div className='row'>
                    <img
                        src={photo}
                        alt=''
                    />
                    <div className='col'>
                        <h5>{name}</h5>
                        <StarRating rating={rating} />
                        <p className='date'>{date}</p>
                    </div>
                </div>
            </div>
            <div className='row desc'>
                <h5>{title}</h5>
                <p>{opinion}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
