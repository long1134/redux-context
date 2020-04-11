import { createSlice, compose } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            id: "",
            name: "",
            email: "",
            active: false
        },
        listUser: [
            {
                id: "1",
                name: "long",
                email: "abc@gmail.com",
                active: false
            },
            {
                id: "2",
                name: "Lan",
                email: "abc@gmail.com",
                active: true
            }
        ],
        listUserShow: [
            {
                id: "1",
                name: "long",
                email: "abc@gmail.com",
                active: false
            },
            {
                id: "2",
                name: "Lan",
                email: "abc@gmail.com",
                active: true
            }]
    },
    reducers: {
        createUser: (state, props) => {
            let id = state.listUser.length ? (parseInt(state.listUser[state.listUser.length - 1].id) + 1) : "1"
            state.listUser = [...state.listUser, { ...props.payload, active: false, id: id.toString() }]
            state.listUserShow = state.listUser
        },
        removeUserById: (state, props) => {
            state.listUser = state.listUser.filter(user => user.id !== props.payload)
            state.listUserShow = state.listUser
        },
        activeUserById: (state, props) => {
            state.listUser = state.listUser.map(user => user.id !== props.payload ? user : { ...user, active: true })
            state.listUserShow = state.listUser
        },
        deactiveUserById: (state, props) => {
            state.listUser = state.listUser.map(user => user.id !== props.payload ? user : { ...user, active: false })
            state.listUserShow = state.listUser
        },
        filterListUser: (state, props) => {
            state.listUserShow = state.listUser.filter(user => {
                return user.active.toString() !== props.payload
            })
        },
    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = userSlice.actions;

export const UserData = state => state.user;

export default userSlice.reducer;
