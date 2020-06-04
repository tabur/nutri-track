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

app.post("/api/food",function(req,res) {
        if(!req.body) {
            return res.status(422).json({message:"provide required data"})
        }
        if(!req.body.firstname || !req.body.lastname) {
            return res.status(422).json({message:"provide required data"})
        }
        if(req.body.firstname.length === 0 || req.body.lastname.length ===0) {
            return res.status(422).json({message:"provide required data"})
        }
        let food = {
            manufacturer:req.body.manufacturer,
            description:req.body.description,
            energy:req.body.energy,
            carbs:req.body.carbs,
            sugar:req.body.sugar,
            fiber:req.body.fiber,
            fat:req.body.fat,
            saturated:req.body.saturated,
            unsaturated:req.body.unsaturated,
            protein:req.body.protein,
            salt:req.body.salt,
            id:id++
        }
        database.push(contact);
        console.log(database);
        return res.status(200).json({message:"success"})
})

//Laiton et tarvii olla energy ja manufacturer et voi muokata.
app.put("/api/food/:id",function(req,res) {
    let tempId = parseInt(req.params.id,10);
    if(!req.body){
        return res.status(422).json({message:"provide required data"})
    }

    if(!req.body.energy || !req.body.manufacturer){
        return res.status(422).json({message:"provide required data"})
    }
    if(req.body.energy.length === 0 || req.body.manufacturer.length === 0){
        return res.status(422).json({message:"provide required data"})
    }

    let food = {
        manufacturer:req.body.manufacturer,
        description:req.body.description,
        energy:req.body.energy,
        carbs:req.body.carbs,
        sugar:req.body.sugar,
        fiber:req.body.fiber,
        fat:req.body.fat,
        saturated:req.body.saturated,
        unsaturated:req.body.unsaturated,
        protein:req.body.protein,
        salt:req.body.salt,   
    }
    for(let i=0;i<database.length;i++){
        if (database[i].id === tempId){
            database.splice(i,1,food);
            return res.status(200).json({message:"success"})
        }
    }
    return res.status(404).json({message:"not found"})
})
app.listen(port);

console.log("Running in port:"+port);
