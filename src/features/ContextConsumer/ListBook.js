import React, { useState, useContext } from 'react';
import BookContext from "./context/BookContext"

export function ListBook(props) {
    const [listBook, setListBook] = useState([]);
    function ShowListBook(listBookContext, deleteBook) {
        return listBookContext ?
            <tbody>
                {listBookContext.map(book =>
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.price}</td>
                        <td>
                            <button onClick={() => deleteBook(book.id)}>remove</button>
                        </td>
                    </tr>)}
            </tbody> : <tbody></tbody>
    }
    return (
        <BookContext.Consumer>
            {context => {
                setListBook(context.listBook)
                function deleteBook(idBook) {
                    context.listBook = context.listBook.filter(book => book.id !== idBook.toString())
                    setListBook(context.listBook)
                }
                return (
                    <div className="table__container">
                        <table >
                            <thead>
                                <tr >
                                    <th width="10%">id</th>
                                    <th width="40%">name</th>
                                    <th width="20%">price</th>
                                    <th width="20%">action</th>
                                </tr>
                            </thead>
                            {ShowListBook(listBook, deleteBook)}
                        </table>
                    </div>
                )
            }}
        </BookContext.Consumer>
    )
}