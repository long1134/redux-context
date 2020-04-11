import React, { Component } from 'react'

const BookContext = React.createContext({
    bookInfo: {
        id: "",
        name: "",
        price: ""
    },
    listBook: [
        {
            id: "1",
            name: "Harry Potter and the Sorcerer's Stone",
            price: "100"
        },
        {
            id: "2",
            name: "Harry Potter and the Goblet of Fire (Harry Potter 4)",
            price: "100"
        },
        {
            id: "3",
            name: "Harry Potter and the Goblet of Fire",
            price: "100"
        },
    ],
})

export default BookContext