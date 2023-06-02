import {PRODUCT_ERROR,PRODUCT_FILTER,PRODUCT_LOADING,PRODUCT_SEARCH,PRODUCT_SUCCESS} from './actionType'
import axios from 'axios'

const product_error=()=>({
    type:PRODUCT_ERROR
})

const product_filter=(payload)=>({
    type:PRODUCT_FILTER,
    payload
})

const product_loading=()=>({
    type:PRODUCT_LOADING
})

const product_search=(payload)=>({
    type:PRODUCT_SEARCH,
    payload
})

const product_success=(payload)=>({
    type:PRODUCT_SUCCESS,
    payload
})

const product_request=(dispatch) =>{
    dispatch(product_loading())
    setTimeout(()=>{
        axios.get('http://localhost:8080/data')
        .then((res)=>{
            dispatch(product_success(res.data))
        }).catch((err)=>{
            dispatch(product_error())
        })
    },2000)
}

export {product_error,product_filter,product_loading,product_request,product_search,product_success}
