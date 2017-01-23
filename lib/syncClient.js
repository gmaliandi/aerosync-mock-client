let io;

export default function(_io) {
  io = _io;
}

export function sendState(state) {
  io.emit('state', state);
}
