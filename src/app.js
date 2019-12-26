const express=require("express");
const path=require("path");
const hbs=require("hbs");

let forecast1=require("./utils/forecast.js");
let geocode1=require("./utils/geocode.js");

let publicDir=path.join(__dirname,"../public");


const port = process.env.PORT || 3000;

let app=express();
app.set("view engine","hbs");


let viewpath=path.join(__dirname,"./templates/views");
app.set("views",viewpath);

let partialspath=path.join(__dirname,"./templates/partials");
hbs.registerPartials(partialspath);


app.use(express.static(publicDir));

app.get("",(req,res)=>{
    res.render("index",{
        title:"Home page",
        age:"Title"
    });
});//app.com

app.get("/help",(req,res)=>{

    res.render("help",{
        title:"Help page",
        age:"Title"
    });

});//app.com/help

app.get("/about",(req,res)=>{

    res.render("about",{
        title:"About Us",
        age:"Title"
    });

});//app.com/help

app.get("/help/*",(req,res)=>{

    res.render("errorpage",{
        errMsg:"No Article Found" 
    });

});//app.com/help

app.get("/weather/",(req,res)=>{
 
    if(!req.query.address){
        return res.send({
            error:"address cannot be empty!"
        });
    }else{
        let city = req.query.address;
        geocode1(city, (error, data) => {

            forecast1(data.center[0],data.center[1], (nerror, ndata) => {
            console.log('Error', nerror)
            console.log('Data', ndata)
            return res.send({
                result:`Address passed:${req.query.address}.Results from API:${ndata}`
           });
        });
      })

        
    }
 
});//app.com/help

app.get("/products/",(req,res)=>{
    console.log(req.query);
    if(!req.query.search){
        return res.send("No searc query provided!");
    }
    res.send("ok to proceed!");
});//app.com/help

app.get("*",(req,res)=>{

    res.render("errorpage",{
        errMsg:"No Page Found" 
    });

});//app.com/help

app.listen(port,()=>{
    console.log("Listened");
});




 
