import { Button, FormControl, InputLabel, Input, IconButton, Icon } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './css/App.css';
import Message from './Message';
import firebase from 'firebase'
import db from './API/firebase'
import FlipMove from 'react-flip-move'
import { Send } from '@material-ui/icons';
import AdazolhubLogo from './Assets/Images/logo512.png'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp','asc')
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name') || 'Unknow User');
  }, []);


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input, 
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      
    })
    setInput('');

  }

  return (
    <div className="App">
      <div className="top-bar">
        <img src={AdazolhubLogo} alt="main logo" className="logo" />
        <p className="app__title">Adazolhub</p>
        <h1>Live Group Chat Box </h1>
        <p>Welcome <span>{username}</span> 😎 </p>
      </div>
      <hr />
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message...</InputLabel> */}
          <Input type="text" className="app__input" placeholder="Enter a message ..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <Send/>
          </IconButton>
        </FormControl>
      
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
            
            ))
          
        }
      </FlipMove>
      <div className="separator">

      </div>

    </div>
  );
}

export default App;
