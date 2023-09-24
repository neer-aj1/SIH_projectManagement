import axios from 'axios';
import React, { useState } from 'react'
import {useSelector} from 'react-redux'

const Chat = () => {
    const user = useSelector(state => state.user.currentUser)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([]);
    const handleSearch = async(e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };
              const { data } = await axios.get(`http://localhost:5000/api?search=${search}`, config);
              setSearchResult(data);
              console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h4>SEARCH</h4>
            <form onSubmit={handleSearch}>
                <input type="text" name="search" id="search" onChange={(e)=>{setSearch(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {searchResult?.map(
                    item => {
                        return (<p key={item._id}>{item.username}</p>)
                    }
                )
                    }
            </div>
        </>
    )
}

export default Chat