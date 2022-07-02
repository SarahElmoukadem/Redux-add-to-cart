import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardsData from './CardsData'
import Button from 'react-bootstrap/Button'
import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(CardsData);
  console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">
        Restaurant
      </h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
                <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem", objectFit: "cover" }}
                    className="mt-3" />
                  <Card.Body>
                    <Card.Title>
                      {element.rname}
                    </Card.Title>
                    <Card.Text>
                      Price : {element.price} $
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary"
                        className="w-100"
                        onClick={() => send(element)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
            )
          })
        }



      </div>
    </div>
  )
}

export default Cards
