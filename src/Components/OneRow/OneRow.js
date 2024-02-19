import './oneRow.scss';
import {BiSolidPencil as Pencil} from 'react-icons/bi';
import { MdDelete as Delete} from "react-icons/md"


import { Button } from 'react-bootstrap';
export default function OneRow({id, title, author, year, publishing, pages, count}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{publishing}</td>
            <td>{pages}</td>
            <td>
                <Button variant='primary'><Pencil/></Button>
                <Button variant='danger'><Delete/></Button>
            </td>
        </tr>
    )
}