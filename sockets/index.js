const { fetchMovies } = require('../socket_controllers/controllers');
module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
		socket.on('disconnect', () => console.log('disconnected')); 
		socket.on('fetchMovies', () => fetchMovies(socket));
	})
}