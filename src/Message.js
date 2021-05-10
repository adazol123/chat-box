import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef, forwarRef} from 'react';
import './css/Messages.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref} className={ isUser? "message__user" : "message__card"}>
            <p className="message__contact">
                {   !isUser ? message.username : ''}
            </p>
            <Card className={ isUser? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        varient="h5"
                        component="h2"
                        
                    >
                          {message.message}
                        
                    </Typography>
                    {/* <p className="chat__timestamp">{Date().toLocaleString()}</p> */}

                </CardContent>
            </Card>
            
        </div>
    )
})

export default Message
