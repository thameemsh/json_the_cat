const request = require("request");
const input = process.argv.splice(2)

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`,(error, response, body) => {
  if(error) {
    console.log('Oops Invalid URL!!!', error); 
    return;
  }

  const data = JSON.parse(body);
  // console.log(typeof data)
  // console.log(data)
  if(data.length === 0) {
    console.log("Oops breed not found!");
    return;
  }
  
  console.log(data[0].description)
})

