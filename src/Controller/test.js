let movie_bussines = require('./../Bussines/test_bussines');
let render = require('./../Middleware/render');
let header_  = require('./../Middleware/header');

let work = {
    movie : function (req, res) {
        movie_bussines.movie(function(result){
            render.renderData(res, result, 'json');
        });
    },
    movie_options : function (req, res) {
        //Allow: OPTIONS, GET, HEAD, POST
        let header = {
            key : "Allow",
            value : "OPTIONS, GET, HEAD, POST"
        }
        header_.addHeader(res, header, function (resp){
            render.renderData(resp, 'ok', 'text');
        });
        
    }
};


module.exports = work;