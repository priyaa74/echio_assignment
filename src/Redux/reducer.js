import {PRODUCT_ERROR,PRODUCT_FILTER,PRODUCT_LOADING,PRODUCT_SEARCH,PRODUCT_SUCCESS} from './actionType'

let initialState={
    products:[],
    filteredProducts:[],
    loading:false,
    error:false
}

 const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    case PRODUCT_LOADING: return{
        ...state,loading:true
    }
    case PRODUCT_ERROR: return{
        ...state,loading: false,error:true
    }
    case PRODUCT_SUCCESS: return{
        ...state,products:[...payload],
        filteredProducts:[...payload],
        error: false,
        loading: false
    }
    case PRODUCT_FILTER:return{
        ...state,filteredProducts:[...handleFilter(state.products,payload)]
    }
    case PRODUCT_SEARCH:return{
        ...state,filteredProducts:[...handleSearch(state.products,payload)]
    }
    default:
        return state;
    }
}

const handleFilter=(data,value)=>{
    let result= data.filter((items)=>{
        if(value.includes(items.Popularity)){
            return items;
        }
        else if(value.includes(items.Platform)){
            return items;
        }
        else if(value.includes(items.Category)){
            return items;
        }
    })
    return result;
}


const handleSearch=(data, value)=>{
   
}

export {reducer}