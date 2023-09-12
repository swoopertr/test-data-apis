let movie_little = require('./../Data/pure/movies_little.json');

let work = {
    movie : function (cb) {
        cb && cb(movie_little);
    }
};

module.exports = work;