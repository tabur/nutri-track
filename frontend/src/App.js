import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddFood from './components/AddFood';
import NavBar from './components/NavBar';
import DayView from './components/DayView';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import AddMeal from './components/AddMeal';
import {Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class App extends React.Component {
	constructor(props) {
    super(props);

    // tilapäinen säilö
    this.state = {
      list:[],
      food:{},
      isLogged: false,
      username:"",
      token: ""
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
        this.props.history.push("/addmeal");
			} else {
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log(error);
		})
  }
  
  onLogin = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
    }
    
		fetch("/login",request).then(response => {
			//this.setLoadingState(false);
			if(response.ok) {
				response.json().then(data => {
					this.setState({
            token:data.token,
            username:data.username,
						isLogged:true
					}, () => {
						this.saveToStorage();
					}) 
				}).catch(error => {
					console.log(error)
        })
			} else {
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			//this.setLoadingState(false);
			console.log(error);
    })
    
	}
	
	onLogout = () => {
		let request = {
			method:"POST",
			mode:"cors",
			headers: {"Content-type":"application/json",
			"token":this.state.token}
		}
		
		fetch("/logout",request).then(response => {
			this.setState({
        username:"",
				token:"",
				isLogged:false
			})
			sessionStorage.removeItem("state");
		}).catch(error => {
			//this.setLoadingState(false);
			console.log(error);
    })
    
	}

  render() {
    return(
      <div className="App">
        <NavBar username={this.state.username} isLogged={this.state.isLogged}
        onLogout={this.onLogout} />
        <Container id="main-content" className="mt-3">
          
          <Switch>
            <Route exact path="/" render={() =>(
              this.state.isLogged ?
              (<Redirect to="/diary"/>):
              (<Login onLogin={this.onLogin} />)
            )}/>
            <Route path="/diary" render={() => (
              this.state.isLogged ?
              (<DayView />):
              (<Redirect to="/"/>)
            )}/>
            <Route path="/addmeal" render={() => (
              this.state.isLogged ?
              (<AddMeal />):
              (<Redirect to="/"/>)
            )}/>
            <Route path="/addfood" render={() => (
              this.state.isLogged ?
              (<AddFood addFood={this.addFood} />):
              (<Redirect to="/"/>)
            )}/>
            <Route render={() => (
              this.state.isLogged ?
              (<Redirect to="/diary"/>):
              (<Redirect to="/"/>)
			 	    )}/>
          </Switch>
        </Container>
      </div>
      
    );
  }
}

export default withRouter(App);
