import React from 'react';
import HeroContent from '../../Components/hero-content/HeroContent';
import CustomButton from '../../Components/custom-button/CustomButton';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroContent>
                <h1>Your New Smile hero</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
					vitae earum dignissimos soluta maxime facilis cum unde nam rerum?

                </p>
                <a href="/appointment">
                    <CustomButton>Get appointment</CustomButton>
                </a>
            </HeroContent>
            
        </div>
    );
};

export default HomePage;