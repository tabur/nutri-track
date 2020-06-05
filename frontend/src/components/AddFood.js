import React from 'react';
import  Form  from 'react-bootstrap/Form';
import  Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class AddFood extends React.Component {
/* 
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

  onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value
		this.setState(state);
	}

  onSubmit = (event) => {
		event.preventDefault();

  }
 */
  render() {
    return (
      <Container>
 
         <Form size="sm">
          
          <legend>Food information</legend>
          <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="brand">Manufacturer / Brand</Form.Label>
            <Form.Control type="text" name="brand" id="brand" placeholder="" />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="description">Food description</Form.Label>
              <Form.Control type="text" name="description" id="description" placeholder="" />
            </Form.Group>
          </Col>
          

          <hr />

          <legend>Nutrition per 100g</legend>
        <Form.Row>
          <Col>
            <Row mb={2}>
              <Form.Group controlId="Energy">
                <Form.Label htmlFor="">Energy</Form.Label>
                <Form.Control ml="auto" md={2} type="text" name="joules" id="joules" placeholder="Joules" />
                <Form.Control ml={4} md={2} type="text" name="calories" id="calories" placeholder="Kcal" />
              </Form.Group>
            </Row>
            
            <fieldset className="carbset">
              <Form.Row mb="2">
                <Form.Group>
                  <Form.Label htmlFor="" >Total Carbohydrates</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="carbs" id="carbs" placeholder="g" />
                </Form.Group>
              </Form.Row>
              <Form.Row mb="2">
                <Form.Group>
                  <Form.Label pl={4} htmlFor="" >Sugar</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="sugar" id="sugar" placeholder="g" />
                </Form.Group>
              </Form.Row>
              <Form.Row mb="2">
                <Form.Group>
                  <Form.Label pl={4} htmlFor="">Fiber</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="fiber" id="fiber" placeholder="g" />
                </Form.Group>
              </Form.Row>
            </fieldset>
          </Col>
          <Col md={4} ml={4}>
            <Form.Row mb={2}>
              <Form.Group>
                <Form.Label htmlFor="">Protein</Form.Label>
                <Form.Control ml="auto" md={2} type="text" name="protein" id="protein" placeholder="g" />
              </Form.Group>
            </Form.Row>
            
            
            <fieldset className="fatset">
              <Form.Row mb={2}>
                <Form.Group>
                  <Form.Label htmlFor="">Total Fat</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="fat" id="fat" placeholder="g" />
                </Form.Group>
              </Form.Row>
              <Form.Row mb={2}>
                <Form.Group>
                  <Form.Label pl={4} htmlFor="">Saturated Fat</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="fat-sat" id="fat-sat" placeholder="g" />
                </Form.Group>
              </Form.Row>
              <Form.Row mb={2}>
                <Form.Group>
                  <Form.Label pl={4} htmlFor="" >Unsaturated Fat</Form.Label>
                  <Form.Control ml="auto" md={2} type="text" name="fat-unsat" id="fat-unsat" placeholder="g" />
                </Form.Group>
              </Form.Row>
            </fieldset>
               
        </Col>
      </Form.Row>            
          <Form.Row>
            <Form.Group pt={3}>
              <Col md={10}>
                <Button variant="success" type="submit" >Add new food</Button>
                <Button variant="danger" type="cancel" >Cancel</Button>
              </Col>
            </Form.Group>
          </Form.Row>
        
        
        </Form> 
        
      </Container>
    );
  }
}

export default AddFood;