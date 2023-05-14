import React, { useState, useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'

import './Products.css'
import { placeOrderItem } from '../Redux/Action'



const Products = () => {
    const [dataItems, setDataItems] = useState([])
    const [stateInfo,setStateInfo]=useState(0)
    const stateData=useSelector((state=>state))
    const dispatch=useDispatch()
    const navigate=useNavigate()

    console.log(stateData.ItemCategory)
    
    useEffect(() => {  
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        const { data } = response
        setDataItems(data.items)
    }

    // const [id,prize,name,category,url]=dataItems

   
    const getDetails=(v)=>{
        const filteredData=dataItems.filter(item=>item.category===v)
        console.log(filteredData)
        

        return (
            <div className="products-container">
                {
                    filteredData.length===0? <h1 className="item-category">No Item Found</h1>:filteredData.map((item)=>
                    <div className="items-container m-1 p-2">
                         <img src={item.url} className="image mt-2" alt={`${item.name}`} />
                    <p className="item-category">{item.category}</p>
                    <p className="item-name">{item.name}</p>
                    <p className="prize">Rs.{item.prize}</p>
                    <button className="btn btn-primary" onClick={()=>{dispatch(placeOrderItem(item.id))
                        navigate("/cart")

                    }
                    }>Order</button>
                    </div>)
                }
                   
                   </div>
        )
    }

    return (
        <div className="products-container">
            
            {
                stateData.ItemCategory.length >0? stateData.ItemCategory.map((v,i)=>
                getDetails(v)
                
                    )  : dataItems.map((v,i)=>
                <div className="items-container m-1 p-2">
                    <img src={v.url} className="image mt-2" alt={`${v.name}`} />
                    <p className="item-category">{v.category}</p>
                    <p className="item-name">{v.name}</p>
                    <p className="prize">Rs.{v.prize}</p>
                    <button className="btn btn-primary" onClick={()=>{
                        dispatch(placeOrderItem(v.id))
                        navigate("/productitem")
                    }
                    }>Order</button>
                    </div>
                    )
            }
            
        </div>
    )
}

export default Products