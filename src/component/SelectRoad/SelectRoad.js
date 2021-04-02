import React from 'react';
import './SelectRoad.css'
import Header from '../Header/Header';
import map from '../../images/Map.png';
import Footer from '../Footer/Footer';


const SelectRoad = () => {

    const handlePlace = () => {
        
    }
    
    return (
        <div className="main-container">
            <div className="select-field">
                <div className="row p-2">
                    <div className="col-md-4 input-road">
                        <form onSubmit={handlePlace}>
                            <input type="text" placeholder="Pick From"/>
                            <input type="text" placeholder="Pick To"/> <br/>
                            <button type="button" className="btn btn-success mt-2">Search</button>
                        </form>
                    </div>
                    <div className="col-md-8 map">
                        <img src={map} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectRoad;