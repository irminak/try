import { useContext, useState, useEffect } from 'react';
import UserProgressContext from '../store/UserProgressContext';
import Modal from './UI/Modal';
import { IoMdClose } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { LuClock4, LuPieChart } from 'react-icons/lu';
import noimage from '../assets/noimage.png';

const Warning = () => {
    const userProgressCtx = useContext(UserProgressContext);
    const [maxHeight, setMaxHeight] = useState('');

    useEffect(() => {
        const calculateMaxHeight = () => {
            const titleElement = document.getElementById('title');
            if (titleElement) {
                const prepElement = document.getElementById('prep');
                const stepsHeader = document.getElementById('steps_header');

                const titleHeight = titleElement.offsetHeight;
                const prepHeight = prepElement.offsetHeight;
                const stepsHeaderHeight = stepsHeader.offsetHeight;

                const columnHeight =
                    document.querySelector('.warning').offsetHeight;
                let availableHeight;

                if (window.innerWidth < 600) {
                    availableHeight = 200;
                } else {
                    availableHeight =
                        columnHeight -
                        titleHeight -
                        prepHeight -
                        stepsHeaderHeight -
                        60;
                }
                setMaxHeight(availableHeight + 'px');
            }
        };

        calculateMaxHeight();

        window.addEventListener('resize', calculateMaxHeight);

        // Cleanup
        return () => {
            window.removeEventListener('resize', calculateMaxHeight);
        };
    }, [userProgressCtx.selectedRecipe]);

    function handleClose() {
        userProgressCtx.hideWarning();
    }

    const selectedRecipe = userProgressCtx.selectedRecipe;

    console.log(selectedRecipe);

    return (
        <Modal
            className='warning'
            open={userProgressCtx.progress === 'warning'}
            onClose={handleClose}
        >
            {selectedRecipe && (
                <>
                    <IoMdClose
                        onClick={handleClose}
                        className='close'
                        size={30}
                    />
                    <div className='cols'>
                        <div className='col recipe-title'>
                            <div className='image'>
                                <img
                                    src={
                                        selectedRecipe.photo === undefined
                                            ? noimage
                                            : selectedRecipe.photo
                                    }
                                    alt=''
                                />
                            </div>
                            <div className='ingredients'>
                                <h4>Ingredients</h4>
                                <div>
                                    <ul>
                                        {selectedRecipe.ingredients.map(
                                            (item) => (
                                                <li key={item.id}>
                                                    <GoDotFill size={10} />
                                                    {item.original}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className='col'
                            id='col'
                        >
                            <div
                                className='title'
                                id='title'
                            >
                                <h2>{selectedRecipe.title}</h2>
                            </div>
                            <div
                                className='prep'
                                id='prep'
                            >
                                <div className='row'>
                                    <div className='img'>
                                        <LuClock4 size={20} />
                                        <div className='col'>
                                            <p>Preparation time</p>
                                            <p>{selectedRecipe.time}min</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='img'>
                                        <LuPieChart size={20} />
                                        <div className='col'>
                                            <p>Servings</p>
                                            <p>{selectedRecipe.servings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 id='steps_header'>Steps</h4>
                            <div
                                className='steps'
                                style={{ height: maxHeight }}
                            >
                                <ol>
                                    {selectedRecipe.steps.map((step) => (
                                        <li key={step.number}>{step.step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default Warning;
