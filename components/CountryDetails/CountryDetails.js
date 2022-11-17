import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function CountryDetails({countries}) {
    const {countryId} = useParams();
    console.log(countryId);
        
    // const selectedCountry = countries.find((oneCountry)=>{
    //     return oneCountry.alpha3Code === countryId;
    // });
    
    const [selectedCountry, setSelectedCountry] = useState({name:{common:""}, capital:"", area:"", borders:[]});

    useEffect(()=>{
        try {
            const fetchCountry = async () => {
                const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
                setSelectedCountry(response.data);
                console.log(selectedCountry);
            }
        fetchCountry();
        } catch (error) {
            console.log(error);
        }
    }, [countryId]);

    console.log(selectedCountry);

    // useEffect(()=>{
    //     fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
    //     .then(response=>response.json())
    //     .then(data=>setSelectedCountry(data))
    //     .catch(error=>console.log(error))
    // },[countryId]);

    const renderBorders = selectedCountry.borders.map((border) => {
        const borderCountry = countries.find((oneCountry)=>{
            return oneCountry.alpha3Code === border;
        });
        return (
            <li>
                <Link to={`/${borderCountry.alpha3Code}`}>
                    {borderCountry.name.common}
                </Link>
            </li>
        )
        });
    
    return (
        <Row key={selectedCountry.alpha3Code}>
            <Col>
                <img
                    style={{width: 200, margin: 20}}
                    src={"https://purecatamphetamine.github.io/country-flag-icons/3x2/"+selectedCountry.alpha2Code+".svg"}
                    alt={selectedCountry.name.common+" flag"}
                />
                <br />
                <h1>{selectedCountry.name.common}</h1>
                <table className="table" style={{textAlign: "left"}}>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{selectedCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{selectedCountry.area} Km²</td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul style={{listStyleType: "none"}}>
                                    {renderBorders}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    );
}

export default CountryDetails;