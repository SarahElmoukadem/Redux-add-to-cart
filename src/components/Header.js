import React, { useState,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { REMOVE } from '../redux/actions/action';


const Header = () => {
  const [price, setPrice] = useState();
  console.log(price);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const remove = (id) => {
    dispatch(REMOVE(id))
  }

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price
    })
    setPrice(price);
  }

  useEffect(() => {
    total()
  }, [total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}

          >
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getdata.length ?
              <div className='card_details'
                style={{ width: "24rem", padding: 10 }}
              >
                <table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((e) => {
                      return (
                        <>
                          <tr key={e.id}>
                            <td>
                              <NavLink to={`/cart/${e.id}`}
                                onClick={handleClose}
                              >
                                <img src={e.imgdata}
                                  style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
                                  alt=""
                                />
                              </NavLink>
                            </td>

                            <td>
                              <p>
                                {e.rname}
                              </p>

                              <p>
                                price: {e.price} $
                              </p>

                              <p>
                                Quantity: {e.qnty}
                              </p>

                              <p
                                onClick={() => remove(e.id)}
                                style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                <i className="fas fa-trash smalltrash"></i>
                              </p>

                            </td>

                            <td className="mt-5"
                              onClick={() => remove(e.id)}
                              style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                    <p className="text-center">
                      Total : {price} $
                    </p>
                  </tbody>

                </table>
              </div>
              :
              <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10 }}>
                <i className="fas fa-close smallclose" style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
                  onClick={handleClose}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>

                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />

              </div>

          }

        </Menu>

      </Navbar>
    </>
  )
}

export default Header
