import React, {useState} from 'react';

const CityGenerator = props => {
    return(
        <div>
        <p>Expected monthly income at retirement</p>
        <select name = 'income' id = 'income' className='select' onChange={props.setIncome} value={props.income}> 
        <option value='' selected hidden>Choose Income</option>
        <option value="< $2,500"> Less than 2,500 USD </option>
        <option value="$2,500 to $3,500"> Between 2,500 USD and 3,500 USD </option>
        <option value="> $3,500"> More than 3,500 USD </option>
        </select>
        
        <p>Preferred environment </p>
        <select name = 'environment' id = 'environment' className='select' onChange={props.setEnvironment} value={props.environment}> 
        <option value='' selected hidden>Choose Preferred Environment</option>
        <option value="Mountains"> Mountains </option>
        <option value="Beach"> Beach </option>
        <option value="City"> City </option>
        </select>
        <div>
          <button value='get_city' onClick={props.getCity}>Get my dream city</button>
        </div>
        </div>
    )
}
export default CityGenerator;