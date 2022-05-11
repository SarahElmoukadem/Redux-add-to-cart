import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE, ADD, REMOVEITEM } from "../redux/actions/action";

const CardsDetails = () => {

  const [data, setData] = useState([]);
  console.log(data)

  const { id } = useParams();
  console.log(id);

  const history = useNavigate()

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const remove = (id) => {
    dispatch(REMOVE(id))
    history("/")
  }
  // Remove item
  const removeItem = (item) => {
    dispatch(REMOVEITEM(item))
  }

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    console.log(comparedata);
    setData(comparedata);
  }

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e))
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
                            {ele.price * ele.qnty}
                          </p>

                          <div
                            style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}
                            className="mt-5 d-flex justify-content-between align-items-center">


                            <span
                              onClick={ele.qnty <= 1 ? ()=>remove(ele.id) : ()=>removeItem(ele)}
                              style={{ fontSize: 24 }}>
                              -
                            </span>

                            <span style={{ fontSize: 22 }}>
                              {ele.qnty}
                            </span>


                            <span style={{ fontSize: 24 }} onClick={() => send(ele)}>
                              +
                            </span>

                          </div>

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


                          <p onClick={() => remove(ele.id)}>
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
