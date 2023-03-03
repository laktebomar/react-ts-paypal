import { SetStateAction, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import {Container,Row, Col} from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link, Router} from 'react-router-dom'


const data = [
  {
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack.",
    "price":"109.95",
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      "id":2,
      "title":"Mens Casual Premium Slim Fit T-Shirts ",
      "price":"22.3",
      "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      },
      {"id":3,
      "title":"Mens Cotton Jacket",
      "price":"55.99",
      "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      }]


function App() {
  
  
  return (
         <div style={{margin:"10px"}}>
      <Container>
      <h1> Products</h1>
      <p style={{opacity:"0.7"}}>you can pay with paypal</p>
      <Row>
       {data.map((item, key)=>{
         return (
           <Col xs={4}>
           <Card style={{ width: '25rem'}} key={key}>
          <Card.Img variant="top" src={item.image} style={{height:"40vh"}} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description.substring(0, 100)}
            </Card.Text>
            
            <Link to={`/products/${item.id}`} ><Button variant="primary">See product</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        )
      })}
      </Row>
      </Container>
      </div>
      
  )
}

export default App
