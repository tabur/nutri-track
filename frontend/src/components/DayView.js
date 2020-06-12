import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


export default class DayView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    //data binding puuttuu vielä kokonaan niin tää ei toimi yhtään

    /* let diaryRow = this.props.meal.map(meal => 
      <Row key={meal.id} className="diary-item p-1 pl-4">
        <Col md={3} className="cell">{meal.food.manufacturer}</Col>
        <Col md={1} className="cell">{meal.amount}</Col>
        <Col md={1} className="cell">{meal.food.energy}</Col>
        <Col md={1} className="cell">{meal.food.carbs}g</Col>
        <Col md={1} className="cell">{meal.food.fat}g</Col>
        <Col md={1} className="cell">{meal.food.protein}g</Col>
        <Col md={1}><a href="#" class="text-danger font-weight-bold">X</a></Col>
      </Row>
    ) */
    

    return(
      <div>
        <Row id="date-button-row" className="pl-4 py-1 text-light">
            <Col md={3}></Col>
              <div className="btn-group">
                <Button className="bg-header text-light">&lt;</Button>
              </div>
            <Col md={4} id="date" className="align-self-center text-center p-2 mx-1 bg-header">
              10.6.2020
            </Col>
            <Button className="bg-header text-light">&gt;</Button>
        </Row>
        <Row id="diary-headings" className="py-1 pl-4 font-weight-bold bg-header text-light rounded-top">
          <Col md={3}>Name</Col>
          <Col md={1}>Weight</Col>
          <Col md={1}>Kcal</Col>
          <Col md={1}>Carbs</Col>
          <Col md={1}>Fat</Col>
          <Col md={1}>Protein</Col>
          <Col md={4}></Col>
        </Row>
        {/* {diaryRow} */}
        <Row className="diary-item p-1 pl-4">
          <Col md={3} className="cell"><Link to="/addmeal">Add Item</Link></Col><Col md={9} className="cell"></Col>
        </Row>
        <Row id="diary-total-numbers" className="py-1 pl-4 font-weight-bold bg-header text-light">
          <Col md={1} className="offset-3">Total</Col>
          <Col md={1}>605</Col>
          <Col md={1}>44g</Col>
          <Col md={1}>9,9g</Col>
          <Col md={1}>82,1g</Col>
        </Row>
      </div>
    )
  }
}


{/* <Row id="diary-headings" class="row py-1 pl-4 font-weight-bold bg-header text-light rounded-top">
<Col class="col-3">Name</Col><Col class="col-1">Weight</Col><Col class="col-1">Kcal</Col><Col class="col-1">Carbs</Col><Col class="col-1">Fat</Col><Col class="col-1">Protein</Col><Col class="col-4"></Col>
</Row>
<Row class="row diary-item p-1 pl-4">
<div class="col-3 cell">{manufacturer}</div><div class="col-1 cell">500g</div><div class="col-1 cell">310</div><div class="col-1 cell">22,5g</div><div class="col-1 cell">4,5g</div><div class="col-1 cell">42,5g</div><div class="col-1"><a href="#" class="text-danger font-weight-bold">X</a></div>
</Row>
<Row class="row diary-item p-1 pl-4 bg-light">
<div class="col-3 cell">Profeel Proteiinivanukas Suklaa-Toffee</div><div class="col-1 cell">360g</div><div class="col-1 cell">295</div><div class="col-1 cell">21,6g</div><div class="col-1 cell">5,4g</div><div class="col-1 cell">39,6g</div><div class="col-1"><a href="#" class="text-danger font-weight-bold">X</a></div>
</Row>
<div class="row diary-item p-1 pl-4">
<div class="col-3 cell"><a href="#">Add Item</a></div><div class="col-9 cell"></div>
</div>
<div id="diary-total-numbers" class="row py-1 pl-4 font-weight-bold bg-header text-light ">
<div class="offset-3 col-1">Total</div><div class="col-1 ">605</div><div class="col-1">44g</div><div class="col-1">9,9g</div><div class="col-1">82,1g</div>
</div>
<!-- <div id="diary-total-goals" class="row py-1 pl-4 font-weight-bold bg-header text-light ">
<div class="offset-3 col-1">Goal</div><div class="col-1">0</div><div class="col-1">0</div><div class="col-1">0</div><div class="col-1">0</div>
</div> -->
<div id="diary-total-titles" class="row py-1 pl-4 font-weight-bold bg-header text-light rounded-bottom ">
<div class=" offset-4 col-1">Kcal</div><div class="col-1">Carbs</div><div class="col-1">Fat</div><div class="col-1">Protein</div>
</div> */}