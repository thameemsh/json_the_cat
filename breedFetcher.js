const request = require("request");


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error, _response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, null);
      return;
    }
  
    if (error) {
      callback(error, null);
      return;
    }

    callback(null,data[0].description);
  });
};



// request(`https://api.theatapi.com/v1/breeds/search?q=${input}`,(error, response, body) => {
//   if(error) {
//     console.log('Oops Invalid URL!!!\n', error);
//     return;
//   }
//   const data = JSON.parse(body);
//   // console.log(typeof data)
//   // console.log(data)

//   if(data.length === 0) {
//     console.log("Oops breed not found!");
//     return;
//   }
//   console.log(data[0].description)
// })

module.exports =  { fetchBreedDescription };