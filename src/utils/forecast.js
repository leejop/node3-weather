let request=require("request");
let forecast = (latitude,longtitude,callback)=>{
    url = `https://api.darksky.net/forecast/e57e3715761561ac32c0b5a91905a01b/${latitude},${longtitude}?units=si`;

request({url:url,json:true} , (error, response, body)=> {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
    //const data = JSON.parse(body);
    let curr = body.currently;
    let finalRes=`Temperature:${curr.temperature} Chance rain:${curr.precipProbability}`;
    callback(error,finalRes);
});

}

module.exports=forecast