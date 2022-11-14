import CountriesList from "../CountriesList/CountriesList";
import {Row, Col} from 'react-bootstrap';

function HomePage({countries}) {
    return (
        <Row>
            <CountriesList countries={countries} />
            <Col></Col>
        </Row>

    );
}
export default HomePage;