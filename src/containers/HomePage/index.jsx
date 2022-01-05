import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { setUsers } from './actions';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}))

const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
})

export function HomePage(props) {
    const { users } = useSelector(stateSelector);
    const { setUser } = actionDispatch(useDispatch());

    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users").catch((err) => {
            console.log("Error: ", err);
        });

        setUser(response.data.data);
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    console.log("Users: ", users);

    return (
        <div>Hello world!</div>
    )
}