import React from 'react';


class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			list:[],
			food:{}
		}
  }


	//helpers
	
	loadFromStorage = () => {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state);
		}
	}
	
	saveToStorage = () => {
		sessionStorage.setItem("state",JSON.stringify(this.state));
	}
	
	componentDidMount() {
		this.loadFromStorage();
	}
  
  getFoodList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json"}			
		}
		fetch("/api/food",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						list:data
					})
					this.saveToStorage();
				}).catch(error => {
					console.log("Failed to parse JSON data:",error)
				})
			} else {
				console.log("Server responded with status:",response.status) 
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		})
	}
  
	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/food/"+id,request).then(response => {
			if(response.ok) {
				console.log("removed:", {id});
			} else {
				console.log("Server responded with status:",response.status)
			}
		}).catch(error => {
			console.log(error);
		})
	}

  addFood = (food) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(food)
		}
		fetch("/api/food",request).then(response => {
			if(response.ok) {
				console.log("food added:", {food});
			} else {
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log(error);
		})
	}
}
