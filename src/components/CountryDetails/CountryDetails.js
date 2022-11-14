import {useParams} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountriesList from '../CountriesList/CountriesList';

function CountryDetails({countries}) {
    const {countryId} = useParams();
        
    const selectedCountry = countries.find((oneCountry)=>{
        return oneCountry.alpha3Code === countryId;
    });

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
    
    const imgSrc = "https://purecatamphetamine.github.io/country-flag-icons/3x2/"+selectedCountry.alpha2Code+".svg";
    const imgAlt = selectedCountry.name.common+" flag";

    return (
        <Row>
            <CountriesList countries={countries}/>
            <Col>
                <img style={{width: 200, margin: 20}}src={imgSrc} alt={imgAlt}/><br />
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