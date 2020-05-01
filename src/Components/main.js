import React, {useEffect, useState} from 'react';
import axios from "axios";
import Details from "./details";
/**
 * @return {null}
 */
function Main() {
    const [countryList, setCountryList] = useState([]);
    const [countryName, setCountryName]  = useState("Georgia");
    const [countryDetails, setCountryDetails]  = useState([]);


    useEffect(() => {
        axios
            .get('https://api.covid19api.com/countries')
            .then((response) => {
                setCountryList(response.data);

            })
            .catch((err) => console.error('[List.jsx]', err.message));
    }, [setCountryList]);
    if (!countryList) return null;
    if (countryName) {
        axios
            .get(`https://api.covid19api.com/total/country/${countryName}`)
            .then((response) => {
                setCountryDetails(response.data);

            })
            .catch(({response}) => console.error( response.message));
    }

    const selectCountry = (e) => {
        setCountryName(e.target.value)
    };

    return(
        <div>
            <button className="btn btn-info">
                <b>ქვეყნების სია</b>
            </button>

            <select className="form-control w-25 d-inline ml-4" onChange={selectCountry}>
                {countryList.map((item, key) =>

                    <option key={key} value={item.Country}>
                        {item.Country}
                    </option>

                )}
            </select>

            <Details contryDetail = {countryDetails} />



        </div>
    )


}
export default Main;