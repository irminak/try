/* eslint-disable react/no-unescaped-entities */
import ceo from '../assets/ceo.png';
import quality from '../assets/quality.png';

const AboutUs = () => {
    return (
        <section className='about'>
            <h4>
                our <span>STORY</span>
            </h4>
            <div className='columns'>
                <p>
                    The idea for "Try" was born out of a shared passion for
                    nutrition and technology. As individuals who have
                    experienced firsthand the challenges of maintaining a
                    healthy diet in today's fast-paced world, we set out to
                    create a solution that would simplify the process and make
                    it accessible to everyone. Our journey has been filled with
                    challenges and triumphs, but through it all, our dedication
                    to helping others lead healthier lives has remained
                    unwavering.
                </p>
                <p>
                    At "Try," our mission is simple: to empower individuals on
                    their journey towards better health and wellness. We believe
                    that achieving your diet goals shouldn't be complicated or
                    restrictive. That's why we're here to provide personalized
                    solutions and delicious recipes to make your journey
                    enjoyable and sustainable.
                    <img
                        className='quality'
                        src={quality}
                        alt=''
                    />
                </p>
                <div className='img'>
                    <img
                        src={ceo}
                        alt=''
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
