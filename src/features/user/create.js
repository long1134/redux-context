import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as reducers from "./userSlice"
import './user.css'

export function Create() {
    const dispatch = useDispatch();
    const actions = reducers.actions
    const [name, setNameValue] = useState('');
    const [email, setEmailValue] = useState('');
    function initValue() {
        setNameValue("")
        setEmailValue("")
    }
    return (
        <div>
            <div>
                <div className="input__container">
                    <label className="label" htmlFor="name">Name : </label>
                    <input value={name} id="name" type="text" placeholder="name" onChange={e => setNameValue(e.target.value)} />
                </div>
                <div className="input__container">
                    <label className="label" htmlFor="email">Email : </label>
                    <input value={email} id="email" type="text" placeholder="email" onChange={e => setEmailValue(e.target.value)} />
                </div>
            </div>
            <div >
                <button
                    onClick={() => {
                        dispatch(actions.createUser({ name, email }))
                        initValue()
                    }}
                >
                    Add Async
                </button>
            </div>
        </div >
    );
}
