import './ProfilePage.css'
import Avatar from '@mui/material/Avatar';
import {useState, useEffect} from 'react'
import Messages from '../CharacterInfoPage/Messages';
import Navigation from '../Navigation/Navigation';

function ProfilePage({user, setUser}){
const [image, setImage] = useState(user?.image)
const [posts, setPosts] = useState('')
useEffect(()=>{
    if(user){
    fetch(`users/${user.id}`)
    .then((resp)=>resp.json())
    .then((data)=>
    {
    setImage(data.image)
    setPosts(data.thoughts)
    }
    )}
},[])



function handleUpdateImage(){
    if(user){
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: user.id,
              image: image
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => setUser(json));
    }
}

return(

<div className='profile_background'>
    <Navigation user={user} setUser={setUser}/>
    <div class="card_profile">
    <div class="img-name">
        <Avatar 
        src={image} 
        alt="profile"
        style={{
            width: '50%',
            height: '210px',
            marginLeft: 'auto',
            marginRight: 'auto',
            
        }}/>
        <input type='text' placeholder='Add image url here to update image' onChange={(e)=> setImage(e.target.value)}/>
        <button onClick={()=>handleUpdateImage()}>📸</button>
        <h2>UserName</h2>
        <h3>{user?.username}</h3>
        <hr></hr>
    </div>
    <div class="followers">
        <h2>Email</h2>
        <h3>{user?.email}</h3>
    </div>
    <div class="button-follow">
        <h1>All Posts</h1>
        <div className='user_posts'>
        {posts? (
            <Messages posts={posts} loggedInUser={user} />
        ): null}
        </div>
    </div>
</div>
</div>

)}


export default ProfilePage