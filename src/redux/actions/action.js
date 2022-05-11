export const ADD = (item) => {
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const REMOVE = (id) => {
    return{
        type:"REMOVE_CART",
        payload:id
    }
}

// remove individual item
export const REMOVEITEM = (item) => {
    return{
        type:"REMOVE_ITEM",
        payload:item
    }
}