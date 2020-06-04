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
    energy: number,
    carbs: number,
    sugar: number,
    fiber: number,
    fat: number,
    saturated: number,
    unsaturated: number,
    protein: number,
    salt: number,
    id: number
}
*/

//REST API

app.get("/api/food",function(req,res) {
	return res.status(200).json(database);
})

app.delete("/api/food/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1);
			return res.status(200).json({message:"success"})
		}
	}
	return res.status(404).json({message:"not found"})
})

app.listen(port);

console.log("Running in port:"+port);