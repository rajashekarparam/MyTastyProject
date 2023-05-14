import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setTableNumber} from '../Redux/Action'

import './TableItem.css'

const TableItem=()=>{

    const arrayOne=[2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const arrayTwo=[1,4,3]
    



    const [number,setNumber]=useState(null)
    const stateData=useSelector((state)=>state)
    const dispatch=useDispatch()
    

    const inActiveBtn="btn btn-outline-primary m-2"
    const activeBtn="btn btn-primary m-1"

    console.log(number)
    console.log(stateData)

    return (
        <div>
            <div className="text-center">
            {
                arrayOne.map((v,i)=>
                <button key={i} className={number===v ? activeBtn: inActiveBtn } onClick={()=>{
                    setNumber(v)
                    dispatch(setTableNumber(v))
                }
                }>{v}</button>)
            }

            </div>
            <div className="lover-tables">
                <h3 className="text p-4">For Lover's :</h3>
                <div>
                {
                    arrayTwo.map((v,i)=>
                    <button key={i} className={number===v ? activeBtn : inActiveBtn} onClick={()=>{
                            setNumber(v)
                            dispatch(setTableNumber(v))
                        }}>{v}</button>)
                }
                </div>
            </div>
        </div>
    )
}

export default TableItem