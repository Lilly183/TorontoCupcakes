import React from 'react'
import Carousel from './Carousel';
import '../css/Home.css';

const Home = () => {
    return (
        <main>
            <section className="spad bg-white welcomeSpad">
                <div className="welcome-banner-container">
                    <div className="row text-center mx-0">
                        <h2 className="py-2 welcome">Welcome to our Cupcake Shop</h2> {/* Changed text color */}
                        <Carousel/>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Home;