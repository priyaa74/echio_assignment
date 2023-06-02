import React from 'react'


function ProductsCard({element}) {
  return (
    <div className='individual'>
  
        <div className='imgBox'>
            <img className='img' src={element.ImageURL} alt="personImg" />
        </div>

        <div >
        <h2>{element.Name}</h2>
        <p>{element.Detail}</p>
        <p style={{fontWeight:"bolder"}}>{element.Platform}</p>
        <button style={{backgroundColor:"green"}} className='button' >Accepted</button>
        <button style={{backgroundColor:"purple"}} className='button'>Barter</button>
    </div>

    <div className='buttonBox'>
        <button className='button' style={{backgroundColor:"blue"}}>DETAIL</button>
        <button  className='button2'>INVITE</button>
        <button  className='button2' style={{border:"transparent"}}>ANALYSE</button>
    </div>

    </div>
  )
}

export default ProductsCard