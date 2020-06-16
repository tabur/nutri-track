const express = require("express");

let router = express.Router();


let database = [];
let mealDb = [];
let foodId = 100;
let mealId = 1000;

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

router.get("/diary", function(req,res) {
  
  let tempList = [];
	for(let i=0;i<mealDb.length;i++) {
    console.log("headers.mealdate: " + req.headers.mealdate.substring(0,9));
    console.log("db.date: " + mealDb[i].date.substring(0,9));
		if(req.session.username === mealDb[i].owner && req.headers.mealdate.substring(0,9) === mealDb[i].date.substring(0,9)) {
			tempList.push(mealDb[i]);
		}
  }
  console.log(tempList);
	return res.status(200).json(tempList);
  
})

router.post("/meal", function(req,res) {
  if(!req.body){
    return res.status(422).json({message:"provide required data"})
  }
  //TODO kunnollinen validaatio

  let meal = {
    owner: req.body.owner,
    date: req.body.date,
    amount: req.body.amount,
    food: {
      manufacturer:req.body.food.manufacturer,
      description:req.body.food.description,
      energy:req.body.food.energy,
      carbs:req.body.food.carbs,
      sugar:req.body.food.sugar,
      fiber:req.body.food.fiber,
      fat:req.body.food.fat,
      saturated:req.body.food.saturated,
      unsaturated:req.body.food.unsaturated,
      protein:req.body.food.protein,
      salt:req.body.food.salt
    },
    id:mealId++
  }
  mealDb.push(meal);
  console.log(mealDb);
  return res.status(200).json({message:"success"})
})

router.delete("/meal/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<mealDb.length;i++) {
		if(mealDb[i].id === tempId) {
			mealDb.splice(i,1);
			return res.status(200).json({message:"success"})
		}
	}
	return res.status(404).json({message:"not found"})
})

router.get("/food",function(req,res) {
	return res.status(200).json(database);
})

router.delete("/food/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1);
			return res.status(200).json({message:"success"})
		}
	}
	return res.status(404).json({message:"not found"})
})

router.post("/food",function(req,res) {
    if(!req.body){
        return res.status(422).json({message:"provide required data"})
    }
    //TODO kunnollinen validaatio

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
      id:foodId++
    }
    database.push(food);
    console.log(database);
    return res.status(200).json({message:"success"})
})

router.put("/food/:id",function(req,res) {
    let tempId = parseInt(req.params.id,10);
    if(!req.body){
        return res.status(422).json({message:"provide required data"})
    }
    //TODO kunnollinen validaatio

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
      id:tempId
    }
    for(let i=0;i<database.length;i++){
        if (database[i].id === tempId){
            database.splice(i,1,food);
            return res.status(200).json({message:"success"})
        }
    }
    return res.status(404).json({message:"not found"})
})

module.exports = router;