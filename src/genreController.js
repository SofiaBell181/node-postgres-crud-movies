const db = require('../databasepg');

class genreController {

   async createGenre(req, res) {
      try {
         const {
            genre,
            movie_genre
         } = req.body;
         const newGenre = await db.query(`INSERT INTO genre (genre, movie_genre_fkey) VALUES ($1, $2) RETURNING *`,
            [genre, movie_genre]);

         res.send(newGenre.rows[0])
      } catch (err) {
         res.send(err);
      }
   }

   async getMovieGenre(req, res) {
      try {
         const id = req.params.id;
         const genre = await db.query(`SELECT * FROM genre WHERE movie_genre_fkey = $1`, [id]);
         res.send(genre.rows)
      } catch (err) {
         res.send(err);
      }
   }

   async getGenre(req, res) {
      try {
         const genre = await db.query(`SELECT * FROM genre ORDER BY id`);
         res.send(genre.rows)
      } catch (err) {
         res.send(err);
      }
   }


   async updateGenre(req, res) {
      try {
         const {
            id,
            genre,
            movie_genre
         } = req.body;
         const newGenre = await db.query(
            `UPDATE genre SET genre = $1, movie_genre_fkey = $2 WHERE id = $3 RETURNING *`,
            [genre, movie_genre, id]);

         res.send(newGenre.rows[0])
      } catch (err) {
         res.send(err);
      }
   }

   async deleteGenre(req, res) {
      try {
         const id = req.params.id;
         const deleteGenre = await db.query(`DELETE FROM genre WHERE id = $1`, [id]);
         res.send(deleteGenre.rows[0]);
      } catch (err) {
         res.send(err);
      }
   }


}


module.exports = new genreController();
