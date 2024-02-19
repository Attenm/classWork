import './books.scss';
import { Container, Row, Col, Table } from "react-bootstrap";
import { useContext } from 'react';
import {MyBook} from '../../Context';
import OneRow from '../OneRow/OneRow';
export default function Books() {

    const {books, handlerOpen} = useContext(MyBook);

console.log(books);
    return (
        <Container>
            <Row>
                <Col>
                   <h2 onClick={handlerOpen}>Список книг</h2>
                   <Table striped bordered hover responsive>
                       <thead>
                        <tr>
                            <th>№</th>
                            <th>Назва книги</th>
                            <th>Автор</th>
                            <th>Рік видання</th>
                            <th>Видавництво</th>
                            <th>К-сть сторінок</th>
                            <th>к-сть примірників</th>
                        </tr>
                       </thead>
                       <tbody>
                            {
                                books.map(book => {
                                    return <OneRow key={book.id} {...book}/>
                                })
                            }
                       </tbody>
                   </Table>
                </Col>
            </Row>
        </Container>
    )
}