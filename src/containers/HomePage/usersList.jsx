import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { makeSelectUsers } from './selectors';

const UsersContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserImage = styled.div`
    width: 7em;
    height: 7em;

    img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`;

const UserName = styled.h3`
    font-size: 20px;
    color: #000000;
    margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}));

export function UserLIst(props) {
    const { users } = useSelector(stateSelector);
    
    const isEmptyUsers = !users || (users && users.length === 0);

    const navigate = useNavigate();

    const goToUresPage = (id) => {
        navigate(`/user/${id}`);
    } 

    if(isEmptyUsers) {
        return null;
    }

    return  <UsersContainer>
        {
            users.map((user, idx) => (
                <UserWrapper key={idx} onClick={() => goToUresPage(user.id)}>
                    <UserImage>
                        <img src={user.avatar} alt={user.first_name} />
                    </UserImage>
                    <UserName>
                    {user.first_name} {user.last_name}
                    </UserName>
                </UserWrapper>
            ))
        }
    </UsersContainer>
}