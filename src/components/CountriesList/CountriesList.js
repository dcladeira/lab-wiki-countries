import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

function CountriesList({countries}) {

    const renderCountries = countries.map((country) => {
        const imgSrc = "https://purecatamphetamine.github.io/country-flag-icons/3x2/"+country.alpha2Code+".svg";
        const imgAlt = country.name.common+" flag";
        return(
            <Row key={country.alpha3Code}>
                <div class="card text-center">
                    <div class="card-body">
                        <img style={{width: 80}}src={imgSrc} alt={imgAlt}/><br />
                        <Link class="card-title" to={`/${country.alpha3Code}`}>
                            {country.name.common}
                        </Link>
                    </div>
                </div>
            </Row>
        )
    });

    return (
        <Col style={{overflow: "scroll", maxHeight: "80vh"}}>
            {renderCountries}
        </Col>
    );
}

export default CountriesList;