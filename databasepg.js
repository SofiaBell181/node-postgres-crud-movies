const Pool = require('pg').Pool;

const client = new Pool({
	host : "localhost",
	user : "postgres",
	port : 5432,
	password : "root",
	database : "movies"
})

module.exports = client

// client.connect(function(err) {
// 	if(err){
// 		console.log(error);
// 	  } else{
// 		console.log('Connected!:)');
// 	  }
// });

// let query = "SELECT * FROM movie";

// client.query(query, (err, result) => {
// 	if(!err) {
// 		console.log(result)
// 	} else {
// 		console.log(err.message)
// 	}

// 	client.end()
// })

