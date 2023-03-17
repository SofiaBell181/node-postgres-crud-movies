const Router = require('../frameworks/Router');
const genreController = require('./genreController');

const router = new Router();

router.post('/genre', genreController.createGenre);
router.get('/genre', genreController.getMovieGenre);  // получаем фильм с его жанрами
router.get('/genres', genreController.getGenre); // получаем все жанры
router.put('/genre', genreController.updateGenre);
router.delete('/genre', genreController.deleteGenre)


module.exports = router;