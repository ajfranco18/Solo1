import React from 'react';

const CityDisplay = props => {
    
    return(
    <div id="city">
        <label htmlFor="income">Income:</label>
        {/* <span id="income">{props.income}</span> */}
        <p>
            <label htmlFor="enviroment"> Environment:</label>
            {/* <span id="environment">{props.environment}</span> */}
        </p>
        <p>
            <label htmlFor="city"> Your City:</label>
            <span id="city">{props.city}</span>
        </p>
    </div>
    );
};



export default CityDisplay;