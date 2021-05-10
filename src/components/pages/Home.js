import '../../App.css';
import Herosection from '../HeroSection'
import React from 'react'
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function Home() {
    return (
        <>
            <Herosection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;
