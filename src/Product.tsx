import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
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
  
const Product = () => {
    const {id} = useParams() 

  return (
    <PayPalScriptProvider  options={{ "client-id": "put-your-clientID-here" }}>
        <Container style={{margin:"10px", width:"140vh"}}>
        {data.filter((item)=>item.id == Number(id)).map(item=>{
            return (
                <Card style={{ width: '30%' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                        <Card.Text>
                        {item.price}
                        </Card.Text>
                        <PayPalButtons     
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                purchase_units: [ 
                                    {
                                    amount: {
                                        value: item.price ,
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            const name = details.payer.name.given_name;
                                            alert(`Transaction completed by ${name}`);
                                        });
                                        }}/>/
                    </Card.Body>
                </Card>
            )
        })}
        </Container>
        </PayPalScriptProvider>  
  )
}

export default Product