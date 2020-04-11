import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as reducers from "./userSlice"
import './user.css'

export function Get() {
    const userData = useSelector(reducers.UserData);
    const { listUserShow } = userData
    const dispatch = useDispatch();
    const actions = reducers.actions

    function ShowListUser() {
        return listUserShow ?
            <tbody>
                {listUserShow.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.active ? "true" : "false"}</td>
                        <td>
                            {user.active ?
                                <button onClick={() => dispatch(actions.deactiveUserById(user.id))}> Deactivate</button> :
                                <button onClick={() => dispatch(actions.activeUserById(user.id))}> Active</button>}
                            <button onClick={() => dispatch(actions.removeUserById(user.id))}>remove</button>
                        </td>
                    </tr>)}
            </tbody> : <tbody></tbody>
    }

    return (
        <div className="mt-5">
            <div>
                <label htmlFor="filter">Filter : </label>
                <select id="filter" onChange={e => dispatch(actions.filterListUser(e.target.value))}>
                    <option value="">Status</option>
                    <option value={false}>Active</option>
                    <option value={true}>Deactive</option>
                </select>
            </div>
            <div className="table__container">
                <table >
                    <thead>
                        <tr >
                            <th width="10%">id</th>
                            <th width="40%">name</th>
                            <th width="30%">email</th>
                            <th width="10%">active</th>
                            <th width="10%">action</th>
                        </tr>
                    </thead>
                    {ShowListUser()}
                </table>
            </div>
        </div>);
}
