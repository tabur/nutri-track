const express = require("express")
const bodyParser = require("body-parser");

//database

let database = [];
let id = 100;

// initialization 

let app = express();
let port = process.env.PORT || 3001

app.use(bodyParser.json());

/*
Data structure

let food = {
    manufacturer:String,
    description:String,
    energy:number,
    carbs: number,
    sugar: number,
    fiber: number,
    fat: number,
    saturated: number,
    unsaturated: number,
    protein: number,
    salt: number,
}
*/

//REST API

app.get("/api/food",function(req,res) {
	return res.status(200).json(database);
})

app.listen(port);

console.log("Running in port:"+port);