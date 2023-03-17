const db = require('../databasepg');

class Controller {
	async createMovie(req, res) {
		try {
			const {movie, year} = req.body;
			const newMovie = await db.query(`INSERT INTO movie (movie, year) VALUES ($1, $2) RETURNING *`, [movie, year]);
			res.send(newMovie.rows[0])
		}
		catch (err) {
			res.send(err)
		}
	}

	async getMovies(req, res) {
		try {
			const movies = await db.query(`SELECT * FROM movie ORDER BY id ASC`);
			res.send(movies.rows)
		}

		catch (err) {
			res.send(err)
		}
	}

	async getOneMovie(req, res) {
		try {
	
			const id = req.params.id;
			const oneMovie = await db.query(`SELECT * FROM movie WHERE movie.id = $1`, [id]);
			res.send(oneMovie.rows[0])
		} 
		catch (err) {
			res.send(err)
		}
	}
	

	async updateMovie(req, res) {
		try {
			const {id, movie, year} = req.body;
			const movieUpdate = await db.query(
				`UPDATE movie SET movie = $1, year = $2 WHERE id = $3 RETURNING *`,
				[movie, year, id]);

				res.send(movieUpdate.rows[0])
		}
		catch(err) {
			res.send(err)
		}
	}

	async deleteMovie(req, res) {
		try {
			const id = req.params.id;
			const deleteFilm = await db.query(`DELETE FROM movie WHERE id = $1`,[id]);
			res.send(deleteFilm.rows[0])
		}

		catch(err) {
			res.send(err)
		}
	}
}

module.exports = new Controller();

