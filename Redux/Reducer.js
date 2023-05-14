const initialState={ItemCategory: [],tableNumber: [],dataList: [], cartCount: 0,tableId:[]}

export const data_reducer=(state=initialState,action)=>{
    const {type}=action
    switch(type){
        case "requestedData":
            return {...state,ItemCategory: [...state.ItemCategory],dataList: [...action.payload]}
        case "Pizza":
            return {...state, ItemCategory: [...state.ItemCategory,action.payload]

            }
        case "Cold Drinks":
            return {...state, ItemCategory: [...state.ItemCategory,action.payload]

            }
        case "Hot Drinks":
            return {...state, ItemCategory: [...state.ItemCategory,action.payload]

            }

        case "Rice Items":
            return {...state,ItemCategory:[...state.ItemCategory,action.payload]

            }
        case "Set Table":
            if(state.tableNumber.includes(action.payload)){
                alert("Table Reserved!")
            }else{
                return {...state,tableNumber: [...state.tableNumber,action.payload]
            }
           

            }

        case "orderItem":
            if(state.tableId.includes(action.payload)){
                return {
                    ...state
                }
            }else {
                return {...state,tableId:[ ...state.tableId,action.payload]}

            }
            

        case "Del Cart":
            const filterTableId=state.tableId.filter(v=>v!==action.payload)
            console.log(filterTableId)
            return {...state,tableId:[...filterTableId]}

        default:
            return {...state}
    }

}

