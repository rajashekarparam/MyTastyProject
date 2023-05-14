export const insertData=(payload)=>{
    return {type: "requestedData",payload}
}


export const orderPizza=(payload)=>{
    return {type: "Pizza", payload}
}

export const orderColdDrinks=(payload)=>{
    return {type: "Cold Drinks",payload}
}
export const orderRiceItems=(payload)=>{
    return {
        type: "Rice Items", payload
    }
}

export const orderHotDrinks=(payload)=>{
    return {type: "Hot Drinks",payload}

}

export const setTableNumber=(payload)=>{
    return {
        type: "Set Table",payload
    }
}

export const placeOrderItem=(payload)=>{
    return {type:"orderItem",payload}
}

export const deleteCartItem=(payload)=>{
    return {type:"Del Cart", payload}
}