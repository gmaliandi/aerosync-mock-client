import io from 'socket.io-client';
import syncClient, {sendState} from './lib/syncClient';

let socket = io('http://localhost:1338');
syncClient(socket);

window.sendState = sendState;
