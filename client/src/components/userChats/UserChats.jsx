import React, { useEffect, useState } from 'react'
import Chat from '../chat/Chat'
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserChats = () => {
    const user = useSelector(state => state.user.currentUser);
    const fetchChats = async() => {
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };
              const { data } = await axios.post(`http://localhost:5000/api/chat/fetch`, config);
              setSearchResult(data);
              console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <>
            <Chat />
            <h1>Chat</h1>
        </>

    )
}

export default UserChats