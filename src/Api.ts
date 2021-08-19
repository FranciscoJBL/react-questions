import openSocket from 'socket.io-client';

const socket = openSocket('localhost:3001', {secure: true});

function getSocket() {
    return socket;
}

function leave(cb: (arg0: any) => void) {
}

function sendMessage(clientData: object) {
    socket.emit('message', clientData)
}

export {leave, sendMessage, getSocket}