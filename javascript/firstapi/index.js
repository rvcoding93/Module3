const PORT = 8000
const express = require('express')  
/*^^^^EXPRESS: backend framework for node js, installed to listen to parse and port to assure everything is functioning 
fluidly. if a path/url is provided, itll execute code and listen to the path defined */
const axios = require('axios')
/* ^^^^ AXIOS: Promise based http client, for browser and node js. sends http requests to rest 
endpoints and perform credit operations. this makes it easy to get, post, put, and delete data.  */
const cheerio = require('cheerio')
/* ^^^^CHEERIO: pick out html elements on webpage, parsing markup adn provides api for traversing data structure. 
                similar to jquery*/
// =============================================================================================================================================

const app = express()



app.listen(PORT,() => console.log('server running on PORT ${}'))