import './menu.scss';
import {Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function Menu() {
    return (
        <Navbar className='navigation' bg='dark' data-bs-theme='dark'>
            <Container>
                <Row>
                    <Col>
                        <Nav className='menu__items'>
                            <NavLink to = '/books' data-rr-ui-event-key='/books'  className='menu__item'>Книги</NavLink>
                            <NavLink to = '/visitors' data-rr-ui-event-key='/visitors' className='menu__item'>Відвідувачі</NavLink>
                            <NavLink to = '/cards' data-rr-ui-event-key='/cards' className='menu__item'>Картки</NavLink>
                            <NavLink to = '/statistics' data-rr-ui-event-key='/statistics' className='menu__item'>Статистика</NavLink>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}