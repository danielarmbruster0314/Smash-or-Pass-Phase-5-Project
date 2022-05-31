import './Messages.css'
import {useState, useEffect} from 'react';
import {AnimateSharedLayout,AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import RelatedComments from './RelatedComments';
import Avatar from '@mui/material/Avatar';
import { positions } from '@mui/system';

const items = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function Messages({posts, loggedInUser}){
  const [allposts, setAllPosts] = useState(null)

  useEffect(() => {
    setAllPosts(posts)
  },[])


    return (
        <AnimateSharedLayout>
          <motion.ul className="messages_ul" layout initial={{ borderRadius: 25 }}>
            {allposts?.map(post => (
              <Item 
              key={post.id} 
              content={post.content} 
              postid={post.id} 
              user={post.user} 
              validations={post.totalvalidations} 
              invalidations={post.invalidations}
              comments={post.comments} 
              loggedInUser={loggedInUser}
              setAllPosts={setAllPosts}
              />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      );
    }












    function Item({content, postid, user, validations,comments, loggedInUser, setAllPosts, invalidations}) {
        const [isOpen, setIsOpen] = useState(false);
        const [text , setText] = useState('')
        const [allcomments, setAllComments] = useState(null)
        const [validates, setValidates] = useState(null)
        const [invalidates, setInValidates] = useState(null)
        const [count, setCount] = useState(null)
      
        useEffect(() => {
          setAllComments(comments)
          setInValidates(invalidations)
          setValidates(validations)
        },[])






        let swear = [
          'chink',
          'nigger',
          'niger',
          'nigg3r',
          'n1gger',
          'n1gg3r',
          'fag',
          'faggot',
          'cunt',
          'bollocks',
          'bugger',
          'bullshit',
          'crap',
          'damn',
          'frigger',
          ]
        
        function handleSubmit(e){
          e.preventDefault();
          const data = {content: text, thought_id: postid, user_id: loggedInUser?.id}
          const foundSwears = swear.filter(word => text.toLowerCase().includes(word.toLowerCase()));
          if(e.keyCode == 13 && e.shiftKey == false && foundSwears.length){
          e.preventDefault();
            alert(`we do not allow these words in messages or posts   (${foundSwears})`);
           }else if(loggedInUser){
            fetch("/comments", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          })
          .then((r) => {
              if (r.ok){
                  r.json().then((newcomment) => {
                    setAllComments([...allcomments,newcomment])
                    setText('')
                  })
              }else{
                  r.json().then((error)=> console.log(error) )
              }
          })
           }else{
             alert('plaese sign in to add a comment to this post')
           }
        }

        function handleSubmitOnClick(e){
          e.preventDefault();
          
          const data = {content: text, thought_id: postid, user_id: loggedInUser?.id}
          const foundSwears = swear.filter(word => text.toLowerCase().includes(word.toLowerCase()));
          if(foundSwears.length){
            alert(`we do not allow these words in messages or posts   (${foundSwears})`);
           }else if(loggedInUser){
            fetch("/comments", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          })
          .then((r) => {
              if (r.ok){
                  r.json().then((newcomment) => {
                    setAllComments([...allcomments,newcomment])
                    setText('')
                  })
              }else{
                  r.json().then((error)=> console.log(error) )
              }
          })
           }else{
             alert('plaese sign in to add a comment to this post')
           }
        }


        function handlevalidate(){

        }

        function handleinvalidate(){

        }
      

        return (
          <motion.div className="messages_li" style={{}} layout    initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <motion.div className='message_container'>
            <div style={{
              position: 'relative'
            }}>
              <span
              style={{
                display: 'flex',
                fontSize: '14px',
                padding: '10px 0px',
                justifyContent: 'space-evenly',
                color: 'darkgray'
              }}>
                <em>{validates? validates: 0} :validations</em>
                <em>{invalidates? invalidates : 0} :invalidations</em>
              </span>
            <motion.button
            className="validate_button"
            style={{
              borderRadius: '10px',
              outline: 'none',
              position: 'absolute',
              top: '-27px',
              right: '155px',
              border: 'none',
              opacity: .8
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: 'none',
              opacity: 1
              }}

              onclick={()=>handlevalidate()}
            >🔥 Validate</motion.button>
            <motion.button
            className="invalidate_button"
            style={{
              borderRadius: '10px',
              backgroundColor: 'green',
              outline: 'none',
              position: 'absolute',
              top: '-27px',
              right: '0px',
              border: 'none',
              opacity: .8
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: 'none',
              opacity: 1
              }}
            onclick={()=>handleinvalidate()}
            
            >💧 Invalidate</motion.button>
            </div>
            <Avatar src={user?.image}/>
            <motion.p 
            className="message_text" 
            onClick={()=>setIsOpen(!isOpen)}>
              {content}</motion.p>
            </motion.div>
            
            <AnimatePresence>
              <motion.div>
              {isOpen ? ( 
                <>
              {allcomments?.map((comment)=> <RelatedComments key={comment.id} comment={comment.content} user={comment.user}/>)}
              <motion.form >
                <motion.textarea 
                className='related_comment_input' 
                type='text' 
                onKeyDown={(e)=>handleSubmit(e)} 
                onChange={e => setText(e.target.value) }
                value={text}
                placeholder="Elaborate on this topic..."/>
                <button style={{display:'none'}} type="submit">Send</button>
                <div
                className='relatedcomment_input_buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                  
                }}
                >
                <motion.button
                 onClick={()=>setIsOpen(!isOpen)}
                >❌</motion.button>
                <motion.button
                style={{
                      color: 'transparent',  
                      textShadow: '0 0 0 green'
                     }}
                     onClick={(e)=>handleSubmitOnClick(e)}
                     > ✔️</motion.button>
                </div>
              </motion.form>
              </>): null}
              </motion.div>
              
            </AnimatePresence>
        
          </motion.div>
        );
      }


      

export default Messages