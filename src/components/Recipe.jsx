/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaRegHeart } from 'react-icons/fa6';
import { LuClock4, LuMilk, LuLeaf } from 'react-icons/lu';

const Recipe = ({ title, photo }) => {
    return (
        <div className='recipe_card'>
            <div className='recipe_photo'>
                <img
                    src={photo}
                    alt=''
                />
            </div>
            <div className='recipe_icons'>
                <div className='recipe_title'>
                    <h4>{title}</h4>
                </div>
                <div className='icon_set'>
                    <LuClock4 size={20} />
                    <p>45 min</p>
                </div>
                <div className='icon_set'>
                    <FaRegHeart
                        size={20}
                        color='red'
                    />
                    <p>125</p>
                </div>
                <div className='icon_set circle'>
                    <LuLeaf
                        size={20}
                        color='#777'
                        // color='#22bf25'
                    />
                </div>
                <div className='icon_set circle'>
                    <LuMilk
                        size={20}
                        color='#777'
                        // color='#167ff7'
                    />
                </div>
            </div>
        </div>
    );
};

export default Recipe;
