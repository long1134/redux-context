import React, { Component } from 'react'

const UserContext = React.createContext({
    userInfo: {
        id: "1",
        name: "Thanh Long",
        email: "abc@gmail.com"
    },
})

export default UserContext