import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {REMOVE} from "../redux/actions/action";

const CardsDetails = () => {

  const [data, setData] = useState([]);
  console.log(data)

  const { id } = useParams();
  console.log(id);

  const history = useNavigate()

  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(REMOVE(id))
    history("/")
  }
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    console.log(comparedata);
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <div className="container  mt-2">
      <h2 className="text-center">
        Item Details
      </h2>

      <section className="container mt-3">
        <div className="iteamsdetails">

          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} />
                </div>

                <div className="details">
                  <Table>
                    <tbody>

                      <tr>
                        <td>
                          <p>
                            <strong>
                              Restaurant:
                            </strong>
                            {ele.rname}
                          </p>


                          <p>
                            <strong>
                              Price:
                            </strong>
                            {ele.price} $
                          </p>


                          <p>
                            <strong>
                              Dishes:
                            </strong>
                            {ele.address}
                          </p>

                          <p>
                            <strong>
                              Total:
                            </strong>
                            300
                          </p>

                        </td>

                        <td>
                          <p>
                            <strong>
                              Rating:
                            </strong>
                            <span style={{ background: "green", color: "#FFF", padding: "2px 5px", borderRadius: "5px" }}>
                              {ele.rating}
                            </span>
                          </p>

                          <p>
                            <strong>
                              Rating:
                            </strong>
                            <span >
                              {ele.somedata}
                            </span>
                          </p>


                          <p onClick={()=>remove(ele.id)}>
                            <strong>
                              Remove:
                            </strong>
                            <span >
                              <i className="fas fa-trash" style={{ color: "red", fontSize: "20px", cursor: "pointer" }}></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>

                  </Table>
                </div>
              </>
            )
          })}


        </div>
      </section>

    </div>
  )
}

export default CardsDetails
