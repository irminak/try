import mobile from '../assets/mobile.png';
import raspberries from '../assets/raspberries.png';

const Mobile = () => {
    return (
        <section className='mobile'>
            <h4>
                download our <span>APP</span>
            </h4>

            <p>
                Take a sneak peek at our mobile app! With a clean and intuitive
                interface, Try. makes it easy to access personalized diet plans,
                browse delicious recipes, and track your progress on the go.
            </p>

            <div className='cols'>
                <div className='col'>
                    <ul>
                        <li>
                            <span>Personalized Diet Plans:</span> Receive
                            customized diet plans tailored to your unique goals
                            and preferences.
                        </li>
                        <li>
                            <span>Recipe Library:</span> Explore a diverse
                            collection of healthy and delicious recipes,
                            complete with nutritional information and cooking
                            instructions.
                        </li>
                        <li>
                            <span>Progress Tracking:</span> Keep track of your
                            progress with intuitive tools and visual charts that
                            help you stay motivated and on track.
                        </li>
                        <li>
                            <span>Community Support:</span> Connect with
                            like-minded individuals, share your journey, and get
                            support from our active community of users.
                        </li>
                    </ul>
                    <img
                        className='rasp'
                        src={raspberries}
                    />
                </div>
                <div className='col'>
                    <img
                        src={mobile}
                        alt=''
                    />
                </div>
            </div>
        </section>
    );
};

export default Mobile;
