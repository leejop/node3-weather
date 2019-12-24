let request=require("request");
let geocode = (address,callback)=>{
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibGVlam9weSIsImEiOiJjazRiNGhtY2kwYTVmM2xtbncxM2UwcGx1In0.uM_1Mkls1epIlub8Fz9rjQ";
    let latitude=0,longtitude=0;
    request({url:url,json:true} , (error, response, body)=> {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
        //const data = JSON.parse(body);
        let curr = body.features[0];
        console.log(body);
        latitude=curr.center[0];
        longtitude=curr.center[1];
        console.log(`Place:${curr.place_name} Latitude:${curr.center[0]} Longitude:${curr.center[1]}`);
        callback(error,curr);
    });
    
};


module.exports=geocode