var express = require('express');
var router = express.Router();
const request = require('request')


const apiKey = `1fb720b97cc13e580c2c35e1138f90f8`
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req,res,next)=>{
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData)=>{
    if(error){
      console.log(error)
    }
    const parsedData = JSON.parse(movieData)
    //res.json(parsedData)
    res.render('index', {
      parsedData: parsedData.results
    })
  })
});



router.get('/movie/:id', function(req,res, next){
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  request.get(thisMovieUrl,(error,response,movieData)=>{
    const parsedSingleMovieData = JSON.parse(movieData)
    if(error){
      console.log(error);
      res.send(error)
    }
    res.render('single-movie', {
      parsedData : parsedSingleMovieData
    })
  })
  // res.send(thisMovieUrl)
  //res.json(req.params.id)
})



router.post('/search', (req,res,next)=>{
  // res.send('sanity check.')
  const userSearchTerm = req.body.movieSearch
  const cat = req.body.cat
  

})

module.exports = router;
