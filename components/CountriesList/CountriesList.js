import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

function CountriesList({countries}) {

    const renderCountries = countries.map((country) => {
        return(
            <Row key={country.alpha3Code}>
                <div className="card text-center">
                    <div className="card-body">
                        <img
                            style={{width: 80}}
                            src={"https://purecatamphetamine.github.io/country-flag-icons/3x2/"+country.alpha2Code+".svg"}
                            alt={country.name.common+" flag"}
                        />
                        <br />
                        <Link className="card-title" to={`/${country.alpha3Code}`}>
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