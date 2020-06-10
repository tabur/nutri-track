import React from 'react';
import Form  from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class AddFood extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      manufacturer:"",
      description:"",
      energy: "",
      carbs: "",
      sugar: "",
      fiber: "",
      fat: "",
      saturated: "",
      unsaturated: "",
      protein: "",
      salt: ""
    }

  }

  //tarvitaan että kenttiin tulee näkymään niihin kirjotetut arvot kun kentän teksti tulee statesta
  onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value
		this.setState(state);
	}

  onSubmit = (event) => {
    event.preventDefault();
    
		let food = {
      manufacturer:this.state.manufacturer,
      description:this.state.description,
      energy:this.state.energy,
      carbs:this.state.carbs,
      sugar:this.state.sugar,
      fiber:this.state.fiber,
      fat:this.state.fat,
      saturated:this.state.saturated,
      unsaturated:this.state.unsaturated,
      protein:this.state.protein,
      salt:this.state.salt
		}
		
		this.props.addFood(food);
		
		this.setState({
      manufacturer:"",
      description:"",
      energy:"",
      carbs:"",
      sugar:"",
      fiber:"",
      fat:"",
      saturated:"",
      unsaturated:"",
      protein:"",
      salt:""
		});

  }
 
  submit = (event) => {
		event.preventDefault();
	}

  render() {
    return (
      <Container>
 
        <Form size="sm" onSubmit={this.submit}>
          
          <legend>Food information</legend>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="manufacturer">Manufacturer / Brand</Form.Label>
              <Form.Control type="text" name="manufacturer" id="manufacturer" onChange={this.onChange} value={this.state.manufacturer} placeholder="" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="description">Food description</Form.Label>
              <Form.Control type="text" name="description" id="description" onChange={this.onChange} value={this.state.description} placeholder="" />
            </Form.Group>
          </Col>
          

          <hr />

          <legend>Nutrition per 100g</legend>
          <Row className="ml-0">
            <Col md={6}>
              <Form.Group as={Row} controlId="Energy">
                <Form.Label column md={4} htmlFor="">Energy</Form.Label>
                <Col md={2} className="ml-auto">
                  <Form.Control type="text" name="energy" id="joules" onChange={this.onChange} value={this.state.energy} placeholder="Joules" />
                </Col>
                <Col md={2} className="">
                  <Form.Control type="text" name="calories" id="calories" placeholder="cal" />
                </Col>
              </Form.Group>
            
              <fieldset className="carbset">
                <Form.Group as={Row}>
                  <Form.Label htmlFor="" column md={4}>Total Carbohydrates</Form.Label>
                  <Col md={2} className="ml-auto">
                    <Form.Control type="text" name="carbs" id="carbs" onChange={this.onChange} value={this.state.carbs} placeholder="g" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column md={4} htmlFor="" >Sugar</Form.Label>
                  <Col md={2} className="ml-auto">
                    <Form.Control type="text" name="sugar" id="sugar" onChange={this.onChange} value={this.state.sugar} placeholder="g" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column md={4} htmlFor="">Fiber</Form.Label>
                  <Col md={2} className="ml-auto">
                    <Form.Control type="text" name="fiber" id="fiber" onChange={this.onChange} value={this.state.fiber} placeholder="g" />
                  </Col>
                </Form.Group>
              </fieldset>
            </Col>

            <Col column md={6}>
              <Form.Group as={Row}>
                <Form.Label column md={4} htmlFor="">Protein</Form.Label>
                <Col column md={2} className="ml-auto">
                  <Form.Control type="text" name="protein" onChange={this.onChange} value={this.state.protein} placeholder="g" />
                </Col>
              </Form.Group>

              <fieldset className="fatset">
                <Form.Group as={Row}>
                  <Form.Label column md={4} htmlFor="">Total Fat</Form.Label>
                  <Col column md={2} className="ml-auto">
                    <Form.Control type="text" name="fat" onChange={this.onChange} value={this.state.fat} placeholder="g" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column md={4}htmlFor="">Saturated Fat</Form.Label>
                  <Col column md={2} className="ml-auto">
                    <Form.Control type="text" name="saturated" onChange={this.onChange} value={this.state.saturated} placeholder="g" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column md={4} htmlFor="" >Unsaturated Fat</Form.Label>
                  <Col column md={2} className="ml-auto">
                    <Form.Control type="text" name="unsaturated" onChange={this.onChange} value={this.state.unsaturated} placeholder="g" />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group as={Row}>
                  <Form.Label column md={4} htmlFor="" >Salt</Form.Label>
                  <Col column md={2} className="ml-auto">
                    <Form.Control type="text" name="salt" onChange={this.onChange} value={this.state.salt} placeholder="g" />
                  </Col>
                </Form.Group>
                
            </Col>
          </Row>
        <Form.Group as={Row} className="pt-3">
          <Col md={10}>
            <Button className="mr-1" variant="success" onClick={this.onSubmit} >Add new food</Button>
            <Button variant="danger" >Cancel</Button>
          </Col>
        </Form.Group>
        
        </Form> 
        
      </Container>
    );
  }
}

export default AddFood;