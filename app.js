const PORT = process.env.PORT || 8080;
const Application = require('./frameworks/Application');
const movieRouter = require('./src/movieRouter');
const genreRouter = require('./src/genreRouter');
const parserJson = require('./frameworks/parserJson');
const parseUrl = require('./frameworks/parseUrl');

const db = require('./databasepg');


const app = new Application();


app.use(parserJson);
app.use(parseUrl('http://localhost:8080'));

app.addRouter(movieRouter);
app.addRouter(genreRouter);

const start = async() => {
	try {
		await db.connect((err) => {
			if(err) {
				console.log(error);
			} else {
				console.log('Database connected!:)');
			}
		});
		app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
	}

	catch (err) {
		console.log(err)
	}
}

start();


