import React from 'react';
import './Home.css';
import '../Header/Header.css'
import bus from '../../images/bus_ecy5cd.svg';
import car from '../../images/baby-car_jsfc99.svg';
import bike from '../../images/motorcycle_cndjq8.svg';
import train from '../../images/rail_zebote.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main-container">
            <div className="card-container container-fluid">
                <Link className="box" to="/selectroad">
                    <div>
                        <img src={bike} alt=""/>
                        <h4>Bike</h4>
                    </div>
                </Link>
                <Link className="box" to="/selectroad">
                    <div>
                        <img src={car} alt=""/>
                        <h4>Car</h4>
                    </div>
                </Link>
                <Link className="box" to="/selectroad">
                    <div>
                        <img src={bus} alt=""/>
                        <h4>Bus</h4>
                    </div>
                </Link>
                <Link className="box" to="/selectroad">
                    <div>
                        <img src={train} alt=""/>
                        <h4>Train</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;