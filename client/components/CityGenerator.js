import React, {useState} from 'react';

const CityGenerator = props => {
    return(
        <div>
        <p>Expected monthly income at retirement:</p>
        <label htmlFor="income">Income: </label>
        <select name = 'income' id = 'income'> 
        <option value="<$1,500 USD"> less than $1,500 USD</option>
        <option value="$1,500 - 2,500 USD"> between $1,500 and $2,500 USD</option>
        <option value=">$2,500"> more than $2,500 USD</option>
        </select>
        <p>Preferred environment </p>
        <select name = 'income' id = 'income'> 
        <option value="mountain"> Mountains </option>
        <option value="beach"> Beach </option>
        <option value="cityEnv"> City </option>
        </select>
        <div>
          <button value='get_city' onClick={props.getCity}>Get my dream city</button>
        </div>
        </div>
    )
}
export default CityGenerator;