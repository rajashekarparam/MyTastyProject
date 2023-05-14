import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

import { orderPizza,orderColdDrinks,orderRiceItems,orderHotDrinks,insertData } from '../Redux/Action'

import './FilterItem.css'


const FilterItem=()=>{
    const [data,setData]=useState()
    const [requestData,setRequestData]=useState([])
    const [stateInfo,setStateInfo]=useState()
    const stateDetails=useSelector((state)=>state)
    const dispatch=useDispatch()
    
    const productItems=["All Items","Cold Drinks", "Hot Drinks", "Rice Items", "Pizza", "Cakes"]

    useEffect(()=>{
        getRequestedData()
    },[])

    const getRequestedData= async ()=>{
        const response= await axios.get('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        const {data}=response
        setRequestData(data.items)
        console.log(data.items)
    }
    console.log(requestData)
    const onChangeOption=(e)=>{
        setData(e.target.value)
        setStateInfo(stateDetails.ItemCategory)

        dispatch(insertData(requestData))

        

    }

    const handleOrder=(data)=>{
        dispatch(orderPizza(data))
        // dispatch(orderColdDrinks(data))
        // dispatch(orderHotDrinks(data))
        // dispatch(orderRiceItems(data))
        
    }

    return (
        <div className="filter-container">
            <h4 className="heading-filter pr-1">Apply Filters :</h4>
            <select className="select-container" onChange={(e)=>onChangeOption(e)}>
                
                {
                    productItems.map((v,i)=>
                        <option key={i} value={v}>{v}</option>)
                }

            </select>
            <div>
                <button className="btn btn-primary ml-1" onClick={()=>handleOrder(data)}>Submit</button>
            </div>

        </div>
    )
}

export default FilterItem