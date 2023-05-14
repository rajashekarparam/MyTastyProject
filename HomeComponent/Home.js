import React, {useState} from 'react'
import { useSelector} from 'react-redux'

import TableItem from '../TablesComponent/TableItem'
import FilterItem from '../FilterComponent/FilterItem'
import Products from '../ProductComponent/Products'
import './Home.css'

const Home=()=>{
    // const state=useSelector((state)=>state)
    // const count=state.tableId.length
    return (
        <div className="home-container">
            
            <h1 className="table-text pt-2">Please Select Your Table Number :</h1>
            <TableItem />
            <FilterItem />
            <Products />

            

        </div>
    )
}

export default Home