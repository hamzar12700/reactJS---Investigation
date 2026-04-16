import React from 'react'
import { Link } from 'react-router-dom';

const DisplayCards = ({addToCarts , setAddToCart}) => {
    console.log(addToCarts,"=====> addToCarts");
    
     const totalPrice = addToCarts.reduce((total, item) => {
    return total + (item.price * item.qty);
  }, 0);


  function removeItem(id) {
    console.log('delete',id);

    const filtered = addToCarts.filter((items , i)=> items.id !== id )
    setAddToCart(filtered)
  }


  return (
    <div>{addToCarts.length === 0 ? <p>No Item Found</p> : addToCarts.map((items,index)=>{
       return < >
   
       <div key={index} className='flex border items-center justify-between px-5 ' >
      <div>
          <h1>Name : {items.name}</h1>
        <h1>Category : {items.category}</h1>
        <h1>Price :{items.price}</h1>
        <h2>Quantity : {items.qty}</h2>
        <h2>Total : {items.qty * items.price}</h2>
      </div>
        <div>

        <button onClick={ ()=>removeItem(items.id)} className='border bg-black text-white px-2 rounded' >❌ Remove</button>
        </div>
       </div>
        
        </>
    }) }
    <hr />
         <h1>{totalPrice}</h1>
 
    </div>
  )
}

export default DisplayCards