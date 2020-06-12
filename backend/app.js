const express = require("express")
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

//database

let database = [];
let id = 100;

// initialization 

let app = express();
let port = process.env.PORT || 3001

app.use(bodyParser.json());

// user management
const registeredUsers = [];
const loggedSessions = [];
const ttl_diff = 1000*60*60


/*

    Session data
    username:String,
    ttl:Number,
    token:String
*/


//HELPERS

createToken = () => {
    const letters = "ABCDEFGHIJKLMNOPabcdefghijklmnop0123456789"
    let token = ""
    for(let i=0;i<256;i++){
        let temp = Math.floor(Math.random()*letters.length)
        token= token + letters[temp];
    }
    return token;
}

isUserLogged = (req,res,next) => {
    let token = req.headers.token;
    if(!token){
        return res.status(403).json({message:"forbidden"})
    }
    for(let i=0;i<loggedSessions.length;i++) {
        if(token === loggedSessions[i].token){
            let now = new Date().getTime();
            if (now > loggedSessions[i].ttl) {
                loggedSessions.splice(i,1);
                return res.status(403).json({message:"forbidden"})
            }
            loggedSessions[i].ttl = now+ttl_diffM
            req.session = {};
            req.session.username = loggedSessions[i].username;
            return next();
        }
    }
    return res.status(403).json({message:"forbidden"})
}


//LOGIN API

app.post("/register",function(req,res) {
    if(!req.body){
        return res.status(422).json({message:"Please provide proper credentials"})
    }
    if(!req.body.username || !req.body.password){
        return res.status(422).json({message:"Please provide proper credentials"})
    }
    if(req.body.username.length < 4 || req.body.password.length <8){
        return res.status(422).json({message:"Please provide proper credential"})
    }
       
    for(let i=0;i<registeredUsers.length;i++) {
        if(req.body.username === registeredUsers[i].username){
            return res.status(409).json({message:"Username is already in use"})
        }
    }
    bcrypt.hash(req.body.password,16,function(err,hash){
        if(err){
            console.log("Failed to hash password, Reason:",err);
            return res.status(422).json({message:"Please provide proper credentials"})
        }
        let user = {
            username:req.body.username,
            password:hash
        }
        registeredUsers.push(user);
        console.log(registeredUsers);
        return res.status(200).json({message:"Success"});
    });

})

app.post("/login",function(req,res){
    if(!req.body){
        return res.status(422).json({message:"Please provide proper credentials"})
    }
    if(!req.body.username || !req.body.password){
        return res.status(422).json({message:"Please provide proper credentials"})
    }
    if(req.body.username.length < 4 || req.body.password.length <8){
        return res.status(422).json({message:"Please provide proper credentials"})
    }
    let found = false;
    for(let i=0;i<registeredUsers.length;i++){
        if(req.body.username === registeredUsers[i].username) {
            found = true;
            bcrypt.compare(req.body.password,registeredUsers[i].password, function(err, success){
                if(err){
                    return res.status(422).json({message:"Please provide proper credentials"})
                }
                if(!success){
                    return res.status(403).json({message:"login failed"})
                }
                let token = createToken();
                let ttl = new Date().getTime()+ttl_diff;
                let session = {
                    username:req.body.username,
                    ttl:ttl,
                    token:token
                }
                loggedSessions.push(session);
                console.log(loggedSessions);
                return res.status(200).json({username:req.body.username, token:token})
            })
        }
    }
    if(!found){
        return res.status(403).json({message:"login failed"});
    }
})
app.post("/logout",function(req,res){
    let token = req.headers.token;
    if(!token){
        return res.status(404).json({message:"not found"})
    }
    for(let i=0;i<loggedSessions.length;i++){
        if(token === loggedSessions[i].token){
            loggedSessions.splice(i,1);
            return res.status(200).json({message:"success"})
        }
    }
    return res.status(404).json({message:"not found"})
})
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
            id:id++
        }
        database.push(food);
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
app.listen(port);

console.log("Running in port:"+port);
