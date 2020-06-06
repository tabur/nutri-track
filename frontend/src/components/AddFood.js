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
          <Row>
          <Col column md={4}>
            <Row>
              <Form.Group as={Row} controlId="Energy">
                <Form.Label column md={4} htmlFor="">Energy</Form.Label>
                <Col>
                  <Form.Control ml="auto"  type="text" name="joules" id="joules" placeholder="Joules" />
                  <Form.Control ml={4}  type="text" name="calories" id="calories" placeholder="Kcal" />
                </Col>
                
              </Form.Group>
            </Row>
            
            <fieldset className="carbset">

                <Form.Group as={Row}>
                  <Form.Label htmlFor="" column md={4}>Total Carbohydrates</Form.Label>
                  <Col md={4}>
                    <Form.Control ml="auto" type="text" name="carbs" id="carbs" placeholder="g" />
                  </Col>
                </Form.Group>

              
                <Form.Group as={Row}>
                  <Form.Label pl={4} column md={4} htmlFor="" >Sugar</Form.Label>
                  <Col md={4}>
                    <Form.Control ml="auto" type="text" name="sugar" id="sugar" placeholder="g" />
                  </Col>
                </Form.Group>
              
                <Form.Group as={Row}>
                  <Form.Label pl={4} column md={4} htmlFor="">Fiber</Form.Label>
                  <Col md={4}>
                    <Form.Control ml="auto" type="text" name="fiber" id="fiber" placeholder="g" />
                  </Col>
                </Form.Group>

            </fieldset>
          </Col>
          <Col column md={4} ml={4}>
            <Form.Group as={Row}>
              <Form.Label column md={4} htmlFor="">Protein</Form.Label>
              <Col>
                <Form.Control ml="auto" type="text" name="protein" id="protein" placeholder="g" />
              </Col>
            </Form.Group>

            <fieldset className="fatset">
              <Form.Group as={Row}>
                <Form.Label column md={4} htmlFor="">Total Fat</Form.Label>
                <Col>
                  <Form.Control ml="auto" type="text" name="fat" id="fat" placeholder="g" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column md={4} pl={4} htmlFor="">Saturated Fat</Form.Label>
                <Col>
                  <Form.Control ml="auto" type="text" name="fat-sat" id="fat-sat" placeholder="g" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column md={4} pl={4} htmlFor="" >Unsaturated Fat</Form.Label>
                <Col>
                  <Form.Control ml="auto" type="text" name="fat-unsat" id="fat-unsat" placeholder="g" />
                </Col>
              </Form.Group>
            </fieldset>
               
          </Col>
        </Row>
        <Form.Group as={Row} pt={3}>
          <Col md={10}>
            <Button variant="success" type="submit" >Add new food</Button>
            <Button variant="danger" type="cancel" >Cancel</Button>
          </Col>
        </Form.Group>
        
        </Form> 
        
      </Container>
    );
  }
}

export default AddFood;