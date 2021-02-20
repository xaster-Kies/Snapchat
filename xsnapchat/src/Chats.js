import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Chats.css'
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import { db } from "./Firebase"
import Chat from './Chat'


function Chats() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])
    return (
        <div class="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon/>
                    <input placeholder="Friends" type="text"/>
                </div>
                <ChatBubbleIcon className="chats__chatsIcons" />
            </div>
            <div className="chats__posts">
                    {posts.map(({id, data: {profilePic, username, timestamp, imageUrl, read }}) => (
                        <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                        />
                    ))}
             </div>
        </div>
    )
}

export default Chats
