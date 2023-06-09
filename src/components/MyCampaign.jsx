import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {product_filter, product_search, product_request} from '../Redux/productAction'
import ProductsCard from './ProductsCard'
import Loader from './Loader'

function MyCampaign() {

  const [filter, setFilter] = useState([]);
  const [searchData, setsearchData] = useState("");
  const dispatch= useDispatch();
 
  const{products, filteredProducts, error, loading} = useSelector((storeData)=> storeData)
  const displayData = filteredProducts.length?filteredProducts:products;
  console.log(displayData);

  const handleFilter =(e)=>{
    const{checked, value} = e.target;
    if(checked){
      setFilter([...filter,value])
    }else{
      setFilter([...filter.filter((e)=>e != value)])
    }
  }

  const searchOnKeyDown=(event)=>{
    if(event.key=="Enter"){
      dispatch(product_search(searchData))
    }
  }

  useEffect(()=>{
    dispatch(product_filter(filter))
  },[filter])

  useEffect(()=>{
    dispatch(product_search(searchData))
  },[searchData])

  useEffect(()=>{
    dispatch(product_request)
  },[])

  return (
    <div>

        <div className='displaySection'>
        <div className='filterSection'>

<div className='attributeDiv'>
  <h4>POPULARITY</h4>
  <div className='selectBox'>
    <input type="checkbox" name=""  value={'Nano'} onChange={handleFilter} />
    <label htmlFor="">Nano(1k-9k)</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Micro'} onChange={handleFilter} />
    <label htmlFor="">Micro(100k-999k)</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Macro'} onChange={handleFilter} />
    <label htmlFor="">Macro(1M-10M)</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Custom'} onChange={handleFilter}/>
    <label htmlFor="">Custom</label>
    <br />
    <input type="range" min="0"  max="100000000"/>
  </div>
</div>


<div className='attributeDiv'>
  <h4>CAMPAIGN PREFERENCE</h4>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Barter'} onChange={handleFilter}/>
    <label htmlFor="">Barter</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Paid'} onChange={handleFilter}/>
    <label htmlFor="">Paid</label>
  </div>
</div>


<div className='attributeDiv'>
  <h4>PLATFORM</h4>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'YouTube'} onChange={handleFilter}/>
    <label htmlFor="">YouTube</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Instagram'} onChange={handleFilter} />
    <label htmlFor="">Instagram</label>
  </div>
</div>

<div className='attributeDiv'>
<h4>ENGAGEMENT RATE</h4>
<input type="range" min="0"  max="100000000" />
</div>

<div className='attributeDiv'>
<h4>AVERAGE</h4>
<input type="range" />
</div>


<div className='attributeDiv'>
  <h4>CATEGORIES</h4>
  <input id='search' type="text" placeholder='Search Category' onChange={(e)=>{
    e.preventDefault();
    setsearchData(e.target.value)}} onKeyDown={searchOnKeyDown} />
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Autos & Vehicles'} onChange={handleFilter} />
    <label htmlFor="">Autos & Vehicles</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Animation'} onChange={handleFilter} />
    <label htmlFor="">Animation</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Agriculture & Allied sectors'} onChange={handleFilter} />
    <label htmlFor="">Agriculture & Allied Sectors</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Art & Craft'} onChange={handleFilter}/>
    <label htmlFor="">Arts & Craft</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Beauty'} onChange={handleFilter}/>
    <label htmlFor="">Beauty</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Blogs & Travel'} onChange={handleFilter}/>
    <label htmlFor="">Blogs And Travel</label>
  </div>
  <div className='selectBox'>
    <input type="checkbox"  name="" value={'Technology'} onChange={handleFilter} />
    <label htmlFor="">Technology</label>
  </div>
</div>
        </div>
        <div className='productsSection'>
  {loading? <Loader/>: error? <img src="https://i.gifer.com/DKke.gif" alt="errorImg" /> : displayData.map((item)=>{
    return(
      <ProductsCard element={item} key={item.id}/>
    
    )
  }) }

</div>

        </div>
    </div>
  )
}

export default MyCampaign