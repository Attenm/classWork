import './header.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <section className='header'>
            <Container>
                <Row>
                    <Col>
                        <h1>LIBRARY</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}