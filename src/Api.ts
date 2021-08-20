import openSocket from 'socket.io-client';
/**
 * open a new socket
 */
const socket = openSocket('localhost:3001', {secure: true});

/**
 * Get the created socket
 */
function getSocket() {
    return socket;
}
/**
 * Send a message to the api server.
 */
function sendMessage(clientData: object) {
    socket.emit('message', clientData)
}

export {sendMessage, getSocket}