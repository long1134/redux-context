import React, { Component, useContext } from 'react'
import UserContext from "./context/UserContext"
import { UserInfo } from "./userInfo"
import { ListBook } from "./ListBook"

export default class BookComponent extends Component {
    static contextType = UserContext
    render() {
        return (
            <UserContext.Provider value={this.context.userInfo}>
                <h4>Context with Provider and Cunsumer : </h4>
                <UserInfo />
                <ListBook />
            </UserContext.Provider>
        )
    }
}
