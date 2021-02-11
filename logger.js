const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('log', (mesage)=>{
    console.log(mesage)
})

emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

module.exports = log