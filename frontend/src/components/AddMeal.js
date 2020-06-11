import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class AddMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        "manufacturer": "asdas",
        "description": "daas",
        "energy": "100",
        "carbs": "24",
        "sugar": "6",
        "fiber": "0",
        "fat": "4",
        "saturated": "0",
        "unsaturated": "0",
        "protein": "15",
        "salt": "3",
        "id": 100
      },
      amount: "",
      searchterm: ""
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

  searchFood(searchterm) {

  }

  render() {
    return(
      <Form size="sm">
        <Form.Row>
          <Col>
          <Form.Row>
            <Col>
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" name="search" value={this.state.searchterm} onChange={this.onChange}/>
            </Col>
          </Form.Row>
          <Form.Row className="pt-2">
            <Col >
              <Form.Control as="select" htmlSize={8} custom>
                {/* tähän mäppäys joka tekee jokaisesta hakutuloksesta rivin */}
                <option>{this.state.food.manufacturer} {this.state.food.description}</option>
                
              </Form.Control>
            </Col>
          </Form.Row>
          </Col>
        <Col>
        <Form.Row className="pl-2">
          <Col>
          <Form.Row>
            <Form.Group as={Col} md={3} className="pl-0 ml-0">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" name="amount" value={this.state.amount} onChange={this.onChange} />
            </Form.Group>
            
          </Form.Row>
          <Form.Row className="pt-1">
            <p>Manufacturer:&nbsp;</p><p>{this.state.food.manufacturer}</p>
          </Form.Row>
          <Form.Row>
          <p>Description:&nbsp;</p><p>{this.state.food.description}</p>
          </Form.Row>
          <Form.Row>
          <p>Energy:&nbsp;</p><p>{this.state.food.energy}</p>
          </Form.Row>
          <Form.Row>
          <p>Carbs:&nbsp;</p><p>{this.state.food.carbs}</p>
          </Form.Row>
          <Form.Row>
          <p>Sugar:&nbsp;</p><p>{this.state.food.sugar}</p>
          </Form.Row>
          <Form.Row>
          <p>Fiber:&nbsp;</p><p>{this.state.food.fiber}</p>
          </Form.Row>
          <Form.Row>
          <p>Total Fat:&nbsp;</p><p>{this.state.food.fat}</p>
          </Form.Row>
          <Form.Row>
          <p>Saturated fat:&nbsp;</p><p>{this.state.food.saturated}</p>
          </Form.Row>
          <Form.Row>
          <p>Unsaturated fat:&nbsp;</p><p>{this.state.food.unsaturated}</p>
          </Form.Row>
          <Form.Row>
          <p>Salt:&nbsp;</p><p>{this.state.food.salt}</p>
          </Form.Row>
        
          <Form.Row>
            <Button type="submit" variant="success" onClick={this.onSubmit}>OK</Button>
            <div className="pl-2">
              <Button type="submit" variant="danger" onClick={this.cancel}>Cancel </Button>
            </div>
          </Form.Row>
          <Form.Row className="pt-2">
            <Button type="submit" variant="primary" onClick={this.addFood}>Add New </Button>
            <div className="pl-2">
              <Button type="submit" variant="primary" >Edit </Button>
            </div>
          </Form.Row>
          </Col>
        </Form.Row>
        </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default AddMeal;