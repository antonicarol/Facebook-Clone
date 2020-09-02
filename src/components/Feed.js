import React,  {useState, useEffect} from 'react'
import './css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase/firebase'
function Feed() {

    const[posts, setPosts] = useState([]);


    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot( snapshot =>{
            setPosts(snapshot.docs.map((doc) =>({
                id: doc.id, 
                data: doc.data()}
            )))
        })
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post=>{
                return <Post 
                key={post.id}
                profilePic={post.data.profileSrc}
                             message={post.data.message}
                             username={post.data.username}
                             timestamp={post.data.timestamp}
                             image={post.data.image}
                            />
            })}
                 
        </div>
    )
}

export default Feed 
