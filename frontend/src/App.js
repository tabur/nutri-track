import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddFood from './components/AddFood';
import NavBar from './components/NavBar';
import DayView from './components/DayView';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
	constructor(props) {
    super(props);

    // tilapäinen säilö
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
  
  // REST - edit toistaiseksi puuttuu

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
					console.log("Failed to parse JSON data:",error);
				})
			} else {
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		})
	}
  
	removeFoodFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/food/"+id,request).then(response => {
			if(response.ok) {
				console.log("food removed:", {id});
			} else {
				console.log("Server responded with status:",response.status);
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
  
  render() {
    return(
      <div className="App">
        <NavBar />
        <Container id="main-content" className="mt-3">
          <DayView />
        </Container>
      </div>
      
    );
  }
}

export default App;
