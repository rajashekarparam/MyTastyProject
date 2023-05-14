import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartItem } from '../Redux/Action'
import { Link } from 'react-router-dom'


import './Cart.css'


const Cart = () => {
    var totalAmount = 0
    const [statesData, setStatesData] = useState()
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setStatesData(state)


    })
    const { tableId, tableNumber, dataList, cartCount } = state

    console.log(statesData)

    const modifiedData = dataList.filter(value => tableId.includes(value.id))


    console.log(modifiedData)

    const deleteCartCount = (id) => {

        dispatch(deleteCartItem(id))
    }

    const payAmountButton=()=>{
        if(totalAmount!==0){
            alert("Payment Successful")

        }else {
            alert("No Active Orders in Cart!")
        }
        
    }

    return (
        <div className="cart-item-container m-3 ">
            {
                modifiedData.length > 0 && modifiedData.map(v => (
                    <div className="items-container m-1 p-2">
                        <img src={v.url} className="image mt-2" alt={`${v.name}`} />
                        <p className="item-category">{v.category}</p>
                        <p className="item-name">{v.name}</p>
                        <p className="prize">Rs.{v.prize}</p>
                        <div>
                        <button className="btn btn-outline-primary " >- </button><span className="quantity">Quantity</span><button className="btn btn-outline-primary ">+</button>
                        </div>
                        
                        <buttun className="btn btn-primary" onClick={() => deleteCartCount(v.id)}>X</buttun>
                        

                    </div>
                ))
            }
            <div className="order-container">
                <h1 className="item-category-one">Order Summary</h1>
                <p className="item-category">Total Orders: {tableId.length}</p>

                {
                    modifiedData.map(v => {
                        totalAmount = totalAmount + v.prize
                    })

                }
                <p className="item-category">Total Amount: {totalAmount}/-</p>
                <div className="text-right">
                    <buttun className="btn btn-primary " onClick={()=>payAmountButton()}>Pay Amount</buttun>
                </div>
                <div className="text-center">
                    <Link to="/"><button className="btn btn-primary p-8 mt-3">Goto Products</button></Link>
                </div>



            </div>


        </div>
    )
}

export default Cart