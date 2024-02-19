import { createContext, useReducer, useState } from "react";
import {myBooks} from './demo';

export const MyBook = createContext();

export default function Context({children}) {
    const reducer = function(books, action) {
        switch(action.type){
            case 'ADD': return books;
            case 'REMOVE': return books;
            case 'EDIT': return books;
            case 'SORT': return books;
            default : return books;
        }
    }

    const [books, dispatch] = useReducer(reducer, myBooks);

    const [modal, setModal] = useState(null)

    handleOpen = function() {
        setModal(true); 
    }

    handleClose = function() {
        setModal(null);
    }

    const value = {books};
    return (
        <MyBook.Provider value = {value}> {children} </MyBook.Provider>
    )
}