import React, { useState } from 'react';
import UserContext from "./context/UserContext"

export class UserInfo extends React.Component {
    static contextType = UserContext
    render() {
        const userInfo = this.context
        return (
            <div>
                <p>Name : {userInfo.name}</p>
                <p>Email : {userInfo.email}</p>
            </div>
        )
    }
}