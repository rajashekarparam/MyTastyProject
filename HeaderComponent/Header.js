import React,{useState} from 'react'
import {useSelector} from 'react-redux'

import './Header.css'

const Header=()=>{
    const state=useSelector((state)=>state)
    const count=state.tableId.length

    return (
        <div className="header-container">
            <nav className="bg-warning nav-container p-2">
                <h1 className="home-heading">Tasty</h1>
                <span className="tag-heading">Your Favorate is Our Preference</span>
                <span className="orders p-2 ">Cart: {count}</span>  
            </nav>

        </div>
    )
}

export default Header