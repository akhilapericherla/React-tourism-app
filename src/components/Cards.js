import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import imageTwo from 'assets/images/img-2.jpg';
import imageThree from 'assets/images/img-3.jpg';
import imageFour from 'assets/images/img-4.jpg';
import imageEight from 'assets/images/img-8.jpg';
import imageNine from 'assets/images/img-9.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={imageNine} alt="Waterfall"
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem src={imageTwo} alt="Bluewater"
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src={imageThree} alt="Boat" //src='assets/images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />

                        <CardItem src={imageFour} alt="Football"
                            src='assets/images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem src={imageEight} alt="Desert"
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;