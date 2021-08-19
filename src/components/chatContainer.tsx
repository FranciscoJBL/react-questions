import { useState, useEffect } from 'react';
import {getSocket, sendMessage} from '../Api';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ExpectedResponse from '../entity/ExpectedResponse';
import { Input } from '@material-ui/core';

function ChatContainer() {
    const [question, setQuestion] = useState('');
    const [expects, setExpectation] = useState(ExpectedResponse.ACCEPT);
    const [input, setInput] = useState('');

    useEffect(() => { 
        getSocket().on( 'question', messageContent => {
            if (messageContent == null) {
                setQuestion("Thank you for your time.");
                setExpectation(ExpectedResponse.End);  
            } else {
                setQuestion(messageContent.data);
            }
        })
    }, []);

    const affirmativeDecition = () => {
        sendMessage({message: 'Yes'});
    }

    const negativeDecition = () => {
        sendMessage({message: 'No'});
    }

    const acceptMessage = () => {
        sendMessage({message: 'accept'});
    }

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        setInput(e.target.value);
    }

    const submitInputChange = () => {
        sendMessage({message: input});
        setInput('');
    }

    const determineResponseStrategy = () => {
        switch (expects) {
            case ExpectedResponse.ACCEPT:
                return <Button 
                    className="option"
                    color="primary"
                    onClick={acceptMessage}
                > 
                    Accept
                </Button>;
            case ExpectedResponse.BINARY_QUESTION:
                return <div className="option-container">
                    <Button 
                        className="option"
                        color="primary"
                        onClick={affirmativeDecition}> 
                        Yes 
                    </Button>
                    <Button 
                        className="option"
                        color="secondary"
                        onClick={negativeDecition}> 
                        No 
                    </Button>
                </div>
            case ExpectedResponse.USER_INPUT:
                return <div className="user-input-container">
                    <Input 
                        className="option"
                        color="primary" 
                        onChange={handleInputChange}/>
                    <Button 
                        className="option"
                        color="secondary"
                        onClick={submitInputChange}
                    > submit </Button>
                </div>
            case ExpectedResponse.End:
            default:
                return null;
        }
    }

    if (question.length > 0) {
        return (
            <div className="chat-container">
                <Paper className="message-log">
                    <span className="message">{question}</span>
                    {determineResponseStrategy()}
                </Paper>
            </div>      
        );
    } else {
        return (<div>Api conection error</div>);
    }
}

export default ChatContainer;
