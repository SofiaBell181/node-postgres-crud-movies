const Router = require('../frameworks/Router');
const movieController = require('./movieController');

const router = new Router();

router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.getMovies);
router.get('/movie', movieController.getOneMovie);
router.put('/movie', movieController.updateMovie);
router.delete('/movie', movieController.deleteMovie)


module.exports = router;