const categories = require("../schemas/categories")

const fetchMovies = (socket) => {
    categories.find()
        .then(movies => socket.emit('fetchMovies', movies))
 
        .catch(e=>onsole.log(e))
}

module.exports = {
    fetchMovies
}